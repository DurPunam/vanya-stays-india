import { Shield, BadgeCheck, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Verified Resorts',
    description: 'Every property is personally verified for quality, cleanliness, and safety standards.',
  },
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'Find a lower price elsewhere? We\'ll match it and give you ₹500 off your next booking.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Pay safely with UPI, cards, or net banking. All transactions are encrypted.',
  },
  {
    icon: Headphones,
    title: '24×7 Support',
    description: 'Our travel experts are available round the clock to assist with any queries.',
  },
];

const WhyVanyaStays = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 section-heading mx-auto">
            Why Vanya Stays?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            We're committed to making your travel experience seamless and memorable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-3xl p-8 text-center group hover:shadow-vanya-xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Verified Resorts' },
            { value: '50K+', label: 'Happy Travelers' },
            { value: '25+', label: 'Destinations' },
            { value: '4.8★', label: 'Average Rating' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="price-tag text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVanyaStays;
