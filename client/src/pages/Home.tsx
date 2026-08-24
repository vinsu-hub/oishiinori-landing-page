/* OIshiinori style reminder: reference-faithful Japanese editorial menu, warm ivory paper, charcoal ink, OIshiinori Vermilion, asymmetric poster rhythm. */
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Clock3, Instagram, MapPin, Menu as MenuIcon, Phone, Send, X } from "lucide-react";
import { MapView } from "@/components/Map";

const logo = "/manus-storage/oishiinori-logo_730916dd.jpg";
const heroImage = "/manus-storage/oishiinori-hero_97067229.png";
const ramenImage = "/manus-storage/oishiinori-ramen_614d8e9f.png";
const drinksImage = "/manus-storage/oishiinori-drinks_913852ae.png";
const snacksImage = "/manus-storage/oishiinori-snacks_9a060d6c.png";

const categories = ["All", "Sushi", "Tako", "Ramen", "Cafe"];
const shopLocation = { lat: 14.278476, lng: 121.4158777 };

const menuItems = [
  { name: "Salmon Maki", category: "Sushi", description: "Fresh salmon, seasoned rice, nori", price: "₱180", image: heroImage, crop: "center", tag: "01" },
  { name: "Spicy Tuna Roll", category: "Sushi", description: "Tuna, house spicy mayo, spring onion", price: "₱210", image: heroImage, crop: "left center", tag: "02" },
  { name: "California Roll", category: "Sushi", description: "Crabstick, avocado, cucumber, sesame", price: "₱195", image: heroImage, crop: "right center", tag: "03" },
  { name: "Tako Bites", category: "Tako", description: "Crispy octo bits, bonito, Oishii sauce", price: "₱145", image: snacksImage, crop: "center", tag: "04" },
  { name: "Tonkatsu Ramen", category: "Ramen", description: "Rich base, noodles, pork cutlet, nori", price: "₱285", image: ramenImage, crop: "center", tag: "05" },
  { name: "Matcha Cream", category: "Cafe", description: "Matcha, full cream, soft mousse", price: "₱160", image: drinksImage, crop: "center", tag: "06" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [reservationSent, setReservationSent] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [email, setEmail] = useState("");

  const filteredItems = useMemo(
    () => activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const handleContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const handleReservation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReservationSent(true);
  };

  return (
    <main className="site-shell">
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header">
        <div className="nav-shell">
          <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => { scrollToId("home"); setMenuOpen(false); }}>Home</button>
            <button onClick={() => { scrollToId("about"); setMenuOpen(false); }}>About</button>
            <button onClick={() => { scrollToId("contact"); setMenuOpen(false); }}>Contact</button>
          </nav>
          <button className="nav-logo" onClick={() => scrollToId("home")} aria-label="OIshiinori home">
            <img src={logo} alt="OIshiinori logo" />
          </button>
          <nav className="nav-links nav-links-right">
            <button onClick={() => scrollToId("menu")}>Menu</button>
            <button onClick={() => scrollToId("about")}>Branches</button>
            <button className="nav-cta" onClick={() => scrollToId("reserve")}>Reserve <ArrowRight size={12} /></button>
          </nav>
        </div>
      </header>

      <section id="home" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">EXCLUSIVE ROLLS<br /><span>FOR YOUR OISHII DAY</span></p>
          <h1>OIshii<br /><em>Nori</em></h1>
          <p className="hero-japanese">おいしいのり</p>
          <p className="hero-description">Rolls with a little more feeling.<br />Fresh ingredients, bright ideas,<br />and a table waiting for you.</p>
          <div className="hero-actions">
            <button className="dark-button" onClick={() => scrollToId("menu")}>Get in touch <ArrowRight size={13} /></button>
            <button className="text-button" onClick={() => scrollToId("menu")}>Popular</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-red-disc" />
          <img src={heroImage} alt="Assorted sushi rolls on a platter" />
          <div className="vertical-stamp">寿司<br /><small>good food, good mood</small></div>
        </div>
        <div className="hero-note">JAPANESE<br />FOOD STUDIO <span>✳</span></div>
      </section>

      <section id="menu" className="menu-section section-pad">
        <div className="section-heading-row">
          <div className="section-seal">巻<br /><small>ROLLS</small></div>
          <div>
            <p className="eyebrow">ON THE TABLE</p>
            <h2>Fresh picks,<br /><span>made daily.</span></h2>
          </div>
          <p className="heading-aside">A small menu with big<br />energy. Start here.</p>
        </div>
        <div className="category-bar" role="tablist" aria-label="Menu categories">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>
          ))}
          <ChevronDown size={15} className="category-arrow" />
        </div>
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-image-wrap">
                <img src={item.image} alt={item.name} style={{ objectPosition: item.crop }} />
                <span className="menu-number">{item.tag}</span>
              </div>
              <div className="menu-card-copy">
                <div className="menu-card-topline"><h3>{item.name}</h3><span className="menu-category">{item.category}</span></div>
                <p>{item.description}</p>
              </div>
              <div className="price-strip">{item.price}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-pad">
        <div className="about-topline">
          <span>CRAFTED WITH ATTENTION</span><span>FROM OUR KITCHEN</span><span>OISHII NORI — EST. 2024</span>
        </div>
        <div className="about-grid">
          <div className="about-copy about-copy-left">
            <p className="eyebrow">SUSHI / ROLLS</p>
            <h2>Simple ideas.<br /><span>Sharp flavor.</span></h2>
            <p>From salmon and tuna to crunchy crabstick and avocado, our sushi is built around the things people actually want to eat: fresh, generous, and made for sharing.</p>
          </div>
          <div className="about-photo"><img src={snacksImage} alt="Crispy OIshiinori snack selection" /></div>
          <div className="about-copy about-copy-right">
            <p className="eyebrow">RAMEN / HOT LINE</p>
            <h2>Warm bowls.<br /><span>Good stories.</span></h2>
            <p>Stay for the ramen, the takoyaki, the sauces, and the little extras that turn a quick bite into your favorite part of the day.</p>
          </div>
        </div>
        <div className="about-bottomline"><span>THE OISHII NORI COLLECTION</span><span className="wave-mark">〰〰〰</span><span>MADE TO BE SHARED</span></div>
      </section>

      <section className="visit-section section-pad">
        <div className="visit-actions">
          <button className="visit-pill" onClick={() => scrollToId("reserve")}><Clock3 /><span><b>Timing</b><small>Check our hours</small></span><ArrowRight /></button>
          <button className={`visit-pill ${mapOpen ? "is-open" : ""}`} onClick={() => setMapOpen((open) => !open)} aria-expanded={mapOpen}><MapPin /><span><b>{mapOpen ? "Hide map" : "Visit us"}</b><small>{mapOpen ? "Close location view" : "Open location view"}</small></span>{mapOpen ? <X /> : <ArrowRight />}</button>
          <div className="hours-card"><div><span className="hours-icon">◷</span><p><b>OPEN DAILY</b><small>11:00 AM — 10:00 PM</small></p></div><p className="hours-address">Pedro Guevara Ave<br />Santa Cruz, Laguna 4009</p></div>
        </div>
        <div className="visit-art"><img src={heroImage} alt="OIshiinori sushi platter" /><div className="art-ring">おいしい<br />OISHII NORI<br />おいしい</div></div>
        {mapOpen && <div className="map-panel"><div className="map-panel-head"><div><p className="eyebrow">FIND THE KITCHEN</p><h3>Oishii Nori<br /><span>Santa Cruz.</span></h3></div><a href="https://maps.app.goo.gl/9oACBZo6tUdzyabK7" target="_blank" rel="noreferrer">Open in Maps <ArrowRight size={13} /></a></div><MapView className="oishiinori-map" initialCenter={shopLocation} initialZoom={17} onMapReady={(map) => { new google.maps.marker.AdvancedMarkerElement({ map, position: shopLocation, title: "Oishii Nori" }); }} /></div>}
      </section>

      <section id="reserve" className="reserve-section section-pad">
        <div className="reserve-copy">
          <p className="eyebrow">YOUR TABLE IS WAITING</p>
          <h2>Reserve<br /><span>a table.</span></h2>
          <p>Make room for good food, cold drinks, and the people you want around. We’ll save you a seat.</p>
          <div className="reserve-note"><span>ご予約</span><small>Reservations are held for 15 minutes.</small></div>
        </div>
        <form className="reserve-form" onSubmit={handleReservation}>
          <div className="reserve-form-row"><label>Date<input required type="date" name="date" /></label><label>Time<select required name="time" defaultValue=""><option value="" disabled>Select time</option><option>11:30 AM</option><option>1:00 PM</option><option>5:30 PM</option><option>7:00 PM</option><option>8:30 PM</option></select></label></div>
          <label>Party size<select required name="party" defaultValue=""><option value="" disabled>Choose a size</option><option>1 guest</option><option>2 guests</option><option>3–4 guests</option><option>5–8 guests</option><option>9+ guests</option></select></label>
          <label>Name<input required name="guest" placeholder="Your name" /></label>
          <label>Phone or email<input required name="contact" placeholder="How can we reach you?" /></label>
          <button className="dark-button submit-button" type="submit">{reservationSent ? "Request received" : "Reserve now"} <ArrowRight size={13} /></button>
          {reservationSent && <p className="form-success" role="status">Arigato — your reservation request is on its way to the kitchen.</p>}
        </form>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-deco deco-left" /><div className="contact-deco deco-right" />
        <div className="contact-title"><p className="eyebrow">WE'RE HERE FOR YOU</p><h2>Contact<br /><span>us.</span></h2><p className="contact-kanji">寿司<br />言語</p><span className="contact-stamp">おいしい</span></div>
        <form className="contact-form" onSubmit={handleContact}>
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required name="message" rows={3} placeholder="Tell us what you’re craving..." /></label>
          <button className="dark-button submit-button" type="submit">{sent ? "Sent — arigato" : "Submit"} <Send size={13} /></button>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src={logo} alt="OIshiinori logo" /><p>Good food, good mood.<br />See you at the table.</p></div>
        <div className="footer-links"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a><a href="tel:+630000000000"><Phone size={14} /> Call the kitchen</a></div>
        <div className="newsletter"><p>SUBSCRIBE TO OISHII NEWS</p><form onSubmit={(e) => { e.preventDefault(); setEmail(""); }}><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" aria-label="Email for newsletter" /><button aria-label="Subscribe"><ArrowRight size={15} /></button></form><small>Fresh dispatches from the kitchen.</small></div>
        <div className="footer-bottom"><span>© 2024 OIshiinori</span><span>寿司の専門家</span><span>Made with appetite.</span></div>
      </footer>
    </main>
  );
}
