import { useEffect } from 'react';
import findingMyPathImage from '../../data/College_campus,_Dayananda_Sagar_College_of_Engineering,_Bangalore,_Karnataka,_India_(2024).png';
import { JourneyHero } from './JourneyHero';
import { JourneySection } from './JourneySection';
import { ShiroHighlight } from './ShiroHighlight';
import { JourneyQuote } from './JourneyQuote';
import { JourneyClosing } from './JourneyClosing';

export const MyJourneyPage = () => {
  useEffect(() => {
    document.title = 'My Journey | Shravani Urankar';
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <JourneyHero />

      <div className="section-divider-bar" />

      {/* Chapter 1: Where It All Began */}
      <JourneySection
        id="chapter-1"
        chapterLabel="CHAPTER 1"
        heading="Where It All Began"
        accentBadge="Childhood & Roots"
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&q=80&w=800"
        imageAlt="Beginnings & Childhood"
        paragraphs={[
          "I didn't grow up in just one place—I grew up across many. My early years began in Mumbai, where I studied until the 3rd standard. After that, life shifted me to Davanagere, where I spent my school years from 4th to 12th.",
          "Each move brought a new rhythm, a new way of living, and new people to understand. Somewhere along the way, adapting stopped feeling like a challenge and started becoming a quiet strength. I learned to find comfort in change, and even more, to enjoy it."
        ]}
      />

      <div className="section-divider-bar" />

      {/* Chapter 2: Finding My Path */}
      <JourneySection
        id="chapter-2"
        chapterLabel="CHAPTER 2"
        heading="Finding My Path"
        accentBadge="College & Tech Growth"
        imagePosition="right"
        imageSrc={findingMyPathImage}
        imageAlt="Bangalore - Student Life & Tech Learning"
        paragraphs={[
          "Later, I moved to Bangalore to study Information Science and Engineering. That phase of life shaped me in ways I didn’t fully realize at the time—it introduced me to independence, ambition, and the idea of building something for myself.",
          "Bangalore also became the place where I stepped into my professional life, working as a developer and learning what it means to grow, both personally and professionally."
        ]}
      />

      <div className="section-divider-bar" />

      {/* Chapter 3: Standing On My Own */}
      <JourneySection
        id="chapter-3"
        chapterLabel="CHAPTER 3"
        heading="Standing On My Own"
        accentBadge="Career & Independence"
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
        imageAlt="Gurugram - Professional Growth & Cloud Systems"
        paragraphs={[
          "Now, life has brought me to Gurugram—a place that, in many ways, changed me. Being here pushed me to take ownership of my decisions and responsibilities, not just for myself but for my family as well.",
          "It hasn’t always been easy, but it has been meaningful. This phase taught me resilience, balance, and the importance of standing on my own feet."
        ]}
      />

      <div className="section-divider-bar" />

      {/* Shiro Highlight - Companion Chapter */}
      <ShiroHighlight />

      <div className="section-divider-bar" />

      {/* Chapter 4: Journeys of the Spirit */}
      <JourneySection
        id="chapter-4"
        chapterLabel="CHAPTER 4"
        heading="Journeys of the Spirit"
        accentBadge="Mountains & Spirituality"
        imagePosition="right"
        imageSrc="https://www.shivkhori.in/wp-content/uploads/2025/09/Kedarnath-Temple.webp"
        imageAlt="Kedarnath - Spiritual Trekking & Reflection"
        paragraphs={[
          "Gurugram also opened up a new side of life for me—traveling and exploring, often through spiritual journeys with my mother, whose deep faith has shaped many of these experiences.",
          "While our perspectives may differ at times, these travels have brought their own kind of peace and connection. I've learned that exploration is as much about the destination as it is about the internal journey."
        ]}
      />

      <div className="section-divider-bar" />

      {/* Pull Quote */}
      <JourneyQuote />

      <div className="section-divider-bar" />

      {/* The Road Ahead & Travel Link */}
      <JourneyClosing />
    </main>
  );
};
