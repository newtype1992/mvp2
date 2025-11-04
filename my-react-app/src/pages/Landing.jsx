import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import ValueUsers from '../components/ValueUsers';
import ValueBusinesses from '../components/ValueBusinesses';
import FeatureCards from '../components/FeatureCards';
import UIFlow from '../components/UIFlow';
import ComparisonTable from '../components/ComparisonTable';
import PricingCTA from '../components/PricingCTA';
import FAQ from '../components/FAQ';

const Landing = ({ registerSection, unregisterSection, onSectionChange }) => {
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const socialRef = useRef(null);
  const userValueRef = useRef(null);
  const businessValueRef = useRef(null);
  const featuresRef = useRef(null);
  const flowRef = useRef(null);
  const comparisonRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);

  const sections = useMemo(
    () => [
      { id: 'hero', ref: heroRef },
      { id: 'social-proof', ref: socialRef },
      { id: 'user-value', ref: userValueRef },
      { id: 'business-value', ref: businessValueRef },
      { id: 'features', ref: featuresRef },
      { id: 'flow', ref: flowRef },
      { id: 'comparison', ref: comparisonRef },
      { id: 'pricing', ref: pricingRef },
      { id: 'faq', ref: faqRef },
    ],
    [],
  );

  useEffect(() => {
    sections.forEach(({ id, ref }) => {
      if (ref.current && registerSection) {
        registerSection(id, ref.current);
      }
    });
    return () => {
      sections.forEach(({ id }) => {
        if (unregisterSection) {
          unregisterSection(id);
        }
      });
    };
  }, [registerSection, unregisterSection, sections]);

  useEffect(() => {
    if (!onSectionChange) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.dataset?.sectionId) {
          onSectionChange(visible.target.dataset.sectionId);
        }
      },
      {
        rootMargin: '-30% 0px -40%',
        threshold: [0.25, 0.4, 0.6],
      },
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [onSectionChange, sections]);

  const scrollToSection = useCallback(
    (id) => {
      const target = sections.find((section) => section.id === id)?.ref.current;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [sections],
  );

  const heroBadges = [
    'Personalized feeds highlight matching studios and services.',
    'Dynamic pricing nudges repeat members to rebook instantly.',
    'Calendar sync keeps availability and capacity accurate without effort.',
  ];

  const logos = ['Pulse Athletics', 'Glow District Salon', 'Northside Wellness', 'Bayfront Recovery'];

  const userPains = [
    {
      icon: '🗓️',
      title: 'No more endless searches',
      description: 'Filtered feeds surface only the openings that match preferences, distance, and price.',
    },
    {
      icon: '📣',
      title: 'Real-time notifications',
      description: 'Instant SMS and push alerts replace calling front desks or refreshing booking pages.',
    },
    {
      icon: '💸',
      title: 'Dynamic savings',
      description: 'Members see time-bound incentives so they can book premium services at better rates.',
    },
    {
      icon: '🔁',
      title: 'Keep routines intact',
      description: 'Favorites and watchlists rebook preferred providers when spots reappear.',
    },
  ];

  const businessOutcomes = [
    {
      title: 'Recover idle revenue',
      description: 'Fill cancelled slots within 15 minutes using automated outreach to nearby members.',
    },
    {
      title: 'Reduce no-shows',
      description: 'Smart reminders and waitlist promotions keep slots full without adding staff workload.',
    },
    {
      title: 'Keep teams busy',
      description: 'Bots monitor calendars and match available staff to members committed to showing up.',
    },
  ];

  const features = [
    {
      icon: '🔄',
      title: 'Calendar sync',
      description: 'Connect Mindbody, Fresha, Jane, or Calendly in minutes with two-way availability updates.',
    },
    {
      icon: '🚀',
      title: 'Smart alerts',
      description: 'Automated SMS, email, and push notifications target members most likely to rebook.',
    },
    {
      icon: '🧾',
      title: 'Payment-ready checkout',
      description: 'Collect payments and deposits on the spot to cut the risk of another no-show.',
    },
    {
      icon: '📊',
      title: 'Operator dashboard',
      description: 'See fill rate, revenue recovered, and no-show trends across every location.',
    },
    {
      icon: '🤝',
      title: 'Loyalty boosts',
      description: 'Reward frequent members with early access and surprise perks on open slots.',
    },
    {
      icon: '🔐',
      title: 'Role-based permissions',
      description: 'Give HQ, managers, and staff the insights they need without sharing logins.',
    },
  ];

  const flowStages = [
    {
      title: 'Onboarding',
      description: 'Members set intent once—Swift Slots does the matching forever.',
      content: (
        <div className="flow-panel">
          <p className="title is-6 has-text-white">Build your feed</p>
          <div className="field">
            <label className="label is-small has-text-grey-light" htmlFor="onboard-email">
              Email
            </label>
            <div className="control has-icons-left">
              <input
                id="onboard-email"
                className="input is-small"
                type="email"
                placeholder="alex@member.com"
                readOnly
              />
              <span className="icon is-small is-left">📧</span>
            </div>
          </div>
          <div className="field">
            <label className="label is-small has-text-grey-light" htmlFor="onboard-role">
              What are you booking?
            </label>
            <div className="control">
              <div className="select is-small is-fullwidth">
                <select id="onboard-role" disabled>
                  <option>Strength training</option>
                </select>
              </div>
            </div>
          </div>
          <progress className="progress is-primary" value="60" max="100">
            60%
          </progress>
          <p className="has-text-grey-light is-size-7 mt-2">Step 3 of 5 · Preferences locked and synced.</p>
        </div>
      ),
    },
    {
      title: 'Booking',
      description: 'Hyper-local availability grid prioritizes matching services.',
      content: (
        <div className="flow-panel">
          <p className="title is-6 has-text-white">Open slots nearby</p>
          <table className="table is-fullwidth is-bordered is-narrow mb-3">
            <thead>
              <tr>
                <th>Time</th>
                <th>Provider</th>
                <th>Incentive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2:30 PM</td>
                <td>Pulse Athletics</td>
                <td className="has-text-success">Waived drop-in</td>
              </tr>
              <tr className="is-selected">
                <td>3:15 PM</td>
                <td>Glow District Salon</td>
                <td className="has-text-success">20% off</td>
              </tr>
              <tr>
                <td>5:00 PM</td>
                <td>Northside Wellness</td>
                <td className="has-text-link">Bonus loyalty points</td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="button is-primary is-fullwidth is-small" disabled>
            Confirm slot
          </button>
        </div>
      ),
    },
    {
      title: 'Checkout',
      description: 'Payments, promo codes, and confirmations handled automatically.',
      content: (
        <div className="flow-panel">
          <p className="title is-6 has-text-white">Secure checkout</p>
          <div className="box has-background-dark">
            <p className="has-text-grey-light">Glow District Salon · Color & Cut</p>
            <p className="title is-4 has-text-white mb-3">$96.00</p>
            <div className="field">
              <label className="label is-small has-text-grey-light" htmlFor="promo-input">
                Promo code
              </label>
              <input id="promo-input" className="input is-small" type="text" placeholder="SWIFT20" readOnly />
            </div>
            <button type="button" className="button is-small is-link is-light is-fullwidth" disabled>
              Apply
            </button>
          </div>
          <article className="message is-success is-small">
            <div className="message-body">Deposit captured · Confirmation sent to salon + member.</div>
          </article>
        </div>
      ),
    },
    {
      title: 'Operator dashboard',
      description: 'Daily KPIs surface fill rate, revenue recovered, and at-risk slots.',
      content: (
        <div className="flow-panel">
          <div className="columns is-mobile is-multiline is-variable is-3">
            {[
              { label: 'Fill rate', value: '87%', status: 'has-text-success' },
              { label: 'Slots recovered', value: '42', status: 'has-text-info' },
              { label: 'Revenue', value: '$6.8k', status: 'has-text-primary' },
            ].map(({ label, value, status }) => (
              <div key={label} className="column is-6-mobile is-4-tablet">
                <div className="kpi-card">
                  <p className="is-size-7 has-text-grey-light">{label}</p>
                  <p className={`title is-5 ${status}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>
          <table className="table is-fullwidth is-narrow">
            <thead>
              <tr>
                <th>Slot</th>
                <th>Recovered</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bayfront Recovery · PT consult</td>
                <td>$210</td>
                <td>12m</td>
              </tr>
              <tr>
                <td>Glow District Salon · Balayage</td>
                <td>$135</td>
                <td>18m</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  const comparisonRows = [
    {
      outcome: 'Instant availability',
      users: 'See only relevant openings, filtered by distance, category, and incentives.',
      businesses: 'Auto-publish cancellations with custom rules per location.',
    },
    {
      outcome: 'Commitment',
      users: 'Pay deposits or full amounts in checkout to guarantee their spot.',
      businesses: 'Deposits reduce no-shows and ensure staff time is paid.',
    },
    {
      outcome: 'Retention',
      users: 'Favorites and streaks unlock surprise offers and early access.',
      businesses: 'Loyalty points keep members coming back without extra admin.',
    },
    {
      outcome: 'Insights',
      users: 'Real-time notifications track the deals they’ve claimed.',
      businesses: 'Dashboard highlights fill rate, revenue recovered, and high-risk times.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Single location teams ready to automate cancellation outreach.',
      bullets: ['2-way calendar sync', 'SMS + email alerts', 'Checkout w/ deposits'],
    },
    {
      name: 'Growth',
      description: 'Multi-location operators refilling dozens of slots per day.',
      bullets: ['Advanced segmentation', 'Performance dashboard', 'Integrations team support'],
      accent: true,
    },
    {
      name: 'Enterprise',
      description: 'Global brands syncing thousands of bookings with existing systems.',
      bullets: ['Custom SLAs', 'Revenue share modeling', 'Dedicated success manager'],
    },
  ];

  const faqItems = [
    {
      question: 'How fast can we go live?',
      answer:
        'Most operators connect their calendar, configure alerts, and launch in under a week. Growth and Enterprise tiers include a guided rollout.',
    },
    {
      question: 'Which booking systems do you integrate with?',
      answer:
        'Swift Slots syncs with Mindbody, Fresha, Jane, Acuity, Calendly, and custom webhooks. Need something else? Our integrations team can help.',
    },
    {
      question: 'Do members need to download another app?',
      answer:
        'No. Members can book from mobile web, SMS, or embedded widgets on your site. A native app is optional for loyalty-heavy programs.',
    },
    {
      question: 'How does pricing work?',
      answer:
        'We align pricing to outcomes. Starter and Growth tiers are commission-based on recovered revenue. Enterprise offers flexible contracts.',
    },
    {
      question: 'What about no-shows after rebooking?',
      answer:
        'Deposits, streak tracking, and automated reminders cut no-shows by 38% on average. Operators can set location-specific policies.',
    },
    {
      question: 'Can we track who refilled each slot?',
      answer:
        'Yes. The dashboard captures member details, time-to-fill, and marketing source attribution for every recovered slot.',
    },
  ];

  return (
    <>
      <Hero
        sectionRef={heroRef}
        title="Fill every cancellation in minutes."
        subtitle="Last-minute marketplace"
        pitch="Swift Slots pairs cancellations with nearby members eager to commit—before idle time hits your bottom line."
        primaryAction="Talk to Sales"
        secondaryAction="See features"
        onPrimary={() => navigate('/talk-to-sales')}
        onSecondary={() => scrollToSection('features')}
        badges={heroBadges}
      />

      <SocialProof sectionRef={socialRef} logos={logos} />

      <ValueUsers sectionRef={userValueRef} pains={userPains} />

      <ValueBusinesses sectionRef={businessValueRef} outcomes={businessOutcomes} />

      <FeatureCards sectionRef={featuresRef} features={features} />

      <UIFlow sectionRef={flowRef} stages={flowStages} />

      <ComparisonTable sectionRef={comparisonRef} rows={comparisonRows} />

      <PricingCTA sectionRef={pricingRef} tiers={pricingTiers} />

      <FAQ sectionRef={faqRef} items={faqItems} />
    </>
  );
};

export default Landing;
