import { useState } from 'react';
import { Search, MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { indianCities } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const filteredCities = indianCities.filter(city =>
    city.toLowerCase().includes(location.toLowerCase())
  );

  const handleSearch = () => {
    navigate('/resorts');
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="search-glass p-2 lg:p-3">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-0">
          {/* Location */}
          <div className="relative flex-1 px-4 py-3 lg:border-r border-border/50">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1">
                <label className="text-xs font-medium text-muted-foreground block mb-1">
                  Where
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setShowLocationDropdown(true);
                  }}
                  onFocus={() => setShowLocationDropdown(true)}
                  placeholder="Search destinations"
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-medium"
                />
              </div>
            </div>
            
            {/* Location Dropdown */}
            {showLocationDropdown && location && filteredCities.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-vanya-lg border border-border z-50 max-h-60 overflow-y-auto">
                {filteredCities.slice(0, 6).map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setLocation(city);
                      setShowLocationDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center gap-3"
                  >
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{city}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Check In */}
          <div className="flex-1 px-4 py-3 lg:border-r border-border/50">
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-full flex items-center gap-3 text-left">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex-1">
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      Check in
                    </label>
                    <span className={cn(
                      "font-medium",
                      !checkIn && "text-muted-foreground"
                    )}>
                      {checkIn ? format(checkIn, 'dd MMM yyyy') : 'Add date'}
                    </span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check Out */}
          <div className="flex-1 px-4 py-3 lg:border-r border-border/50">
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-full flex items-center gap-3 text-left">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex-1">
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      Check out
                    </label>
                    <span className={cn(
                      "font-medium",
                      !checkOut && "text-muted-foreground"
                    )}>
                      {checkOut ? format(checkOut, 'dd MMM yyyy') : 'Add date'}
                    </span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="flex-1 px-4 py-3">
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-full flex items-center gap-3 text-left">
                  <Users className="w-5 h-5 text-primary shrink-0" />
                  <div className="flex-1">
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      Guests
                    </label>
                    <span className="font-medium">
                      {guests} guests, {rooms} room
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72" align="end">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Guests</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-semibold">{guests}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setGuests(Math.min(10, guests + 1))}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Rooms</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-semibold">{rooms}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setRooms(Math.min(5, rooms + 1))}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <div className="px-2 py-2">
            <Button
              onClick={handleSearch}
              className="btn-gradient rounded-full h-12 lg:h-14 px-6 lg:px-8 flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span className="font-semibold">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
