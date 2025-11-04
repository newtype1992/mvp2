import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import FeatureHighlights from './components/FeatureHighlights';
import HowItWorks from './components/HowItWorks';
import BusinessBenefits from './components/BusinessBenefits';
import Callouts from './components/Callouts';
import FinalCta from './components/FinalCta';
import SiteFooter from './components/SiteFooter';

const heroContent = {
  tag: 'Last-Minute Cancellation Marketplace',
  title: 'Fill empty appointments in minutes, not days.',
  subtitle:
    'Swift Slots gives gyms, salons, and clinics a real-time channel to rebook last-minute cancellations with nearby customers who are ready to commit.',
  primaryCta: 'Join the waitlist',
  secondaryCta: 'See product demo',
  benefits: [
    '📱 Personalized feeds for members looking for their next slot.',
    '🚨 Instant alerts for cancellations with dynamic discounts.',
    '🧠 Built on existing booking tools you already use.',
  ],
  timelineItems: [
    {
      time: '1:00 PM',
      activity: '50% off Deep Tissue Massage',
      badge: 'Starting in 45 min',
    },
    {
      time: '2:15 PM',
      activity: '$29 Power Yoga Drop-in',
      badge: 'Watched studio',
      badgeClass: 'is-success',
    },
    {
      time: '3:30 PM',
      activity: '40% off Haircut + Style',
      badge: 'New in your area',
      badgeClass: 'is-warning',
    },
  ],
  stat: {
    value: '92%',
    description: 'of cancelled slots refilled in 20 minutes',
  },
};

const featureHighlights = [
  {
    icon: '⚡',
    title: 'Realtime marketplace',
    description:
      'Cancellations automatically appear in user feeds within seconds, ensuring the window to rebook never closes.',
  },
  {
    icon: '📍',
    title: 'Hyper-local discovery',
    description:
      'Customers see offers from businesses in their neighborhood, filtered by interests like yoga, facials, or dental cleanings.',
  },
  {
    icon: '🤝',
    title: 'Retention for operators',
    description:
      'Keep schedules full and customers loyal with smart discounts and automated follow-up messaging.',
  },
];

const howItWorksContent = {
  title: 'How Swift Slots works',
  steps: [
    {
      number: '1',
      title: 'Set your preferences',
      description:
        "Users pick categories they care about—like massages, pilates, or whitening treatments—and choose how far they're willing to travel.",
    },
    {
      number: '2',
      title: 'Sync business calendars',
      description:
        'Swift Slots connects with Fresha, MindBody, JaneApp, Calendly, and more to surface openings the moment a cancellation happens.',
    },
    {
      number: '3',
      title: 'Notify and rebook instantly',
      description:
        'The marketplace alerts nearby members. Slots include countdown timers and dynamic pricing to drive immediate bookings.',
    },
  ],
};

const businessBenefitsContent = {
  heading: 'Why operators love Swift Slots',
  description:
    'Last-minute cancellations cost billions. Swift Slots turns those empty chairs into new revenue while keeping regulars engaged.',
  benefits: [
    '📊 Dashboard insights on rebooked revenue and fill rates.',
    '🔔 Push notifications and SMS for favorite customers.',
    '🧾 Automated receipts and reminders reduce future no-shows.',
  ],
  pricing: [
    {
      title: '10-15% commission',
      description: 'Only on successfully rebooked slots.',
    },
    {
      title: 'Pro subscription',
      description: 'Unlock analytics, team seats, and premium placement.',
    },
    {
      title: 'Exit strategy',
      description: 'Built to partner or sell to ClassPass, MindBody, or Fresha.',
    },
  ],
};

const calloutItems = [
  {
    title: 'Prototype ready',
    description:
      'Explore the Swift Slots experience right now with the interactive demo on Bolt.new, complete with cancellation flows and instant notifications.',
  },
  {
    title: 'Build it your way',
    description:
      'Grab the original build prompt or fork the prototype to create a custom version tailored to your market.',
  },
];

const finalCtaContent = {
  title: 'Ready to keep your schedule full?',
  subtitle:
    'Join the Swift Slots beta to reduce no-shows, surprise loyal customers, and prove out a high-growth marketplace ready for acquisition.',
  primaryCta: 'Request early access',
  secondaryCta: 'Talk to sales',
};

const footerText =
  'Swift Slots — turning last-minute cancellations into loyal customers. Built for local service businesses and the platforms that power them.';

function App() {
  return (
    <div className="swift-slots">
      <HeroSection {...heroContent} />
      <FeatureHighlights features={featureHighlights} />
      <HowItWorks {...howItWorksContent} />
      <BusinessBenefits {...businessBenefitsContent} />
      <Callouts items={calloutItems} />
      <FinalCta {...finalCtaContent} />
      <SiteFooter text={footerText} />
    </div>
  );
}

export default App;
