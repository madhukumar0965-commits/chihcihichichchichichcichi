import styles from "./page.module.css";
import { siteDescription, siteName, siteUrl } from "./site";

const faqs = [
  {
    question:
      "How can I check my GiftCardMall MyGift balance or GiftCardMall balance?",
    answer:
      "Start with the balance-check details printed on your card or packaging. Make sure the web address matches the issuer’s instructions before entering any card information.",
  },
  {
    question: "Does a prepaid card need to be activated?",
    answer:
      "It depends on the card. Some are activated when purchased, while others require an extra step. Check the receipt and card materials for the correct process.",
  },
  {
    question: "Why might a prepaid card payment be declined?",
    answer:
      "A payment can fail if the card is not activated, the available balance is too low, or the merchant or transaction type is not supported. Review the card instructions and contact the issuer if you still need help.",
  },
  {
    question: "Can I use a prepaid Visa card for any online purchase?",
    answer:
      "Not always. Online use depends on the card’s terms, the merchant’s payment rules, and the available balance. Some cards restrict certain transaction types.",
  },
  {
    question: "What does giftcardmall mygift balance mean?",
    answer:
      "It refers to the available value on a prepaid card. Purchases, refunds, and pending authorizations can affect the amount shown.",
  },
  {
    question: "Where can I find GiftCardMall/MyGift Balance information?",
    answer:
      "Use the balance and support instructions printed on your card or packaging, and verify the website address before entering private details.",
  },
  {
    question: "Is giftcardmall.vip an official GiftCardMall/MyGift website?",
    answer:
      "No. giftcardmall.vip is an independent information resource and is not affiliated with or endorsed by GiftCardMall, MyGift, or a card issuer.",
  },
  {
    question: "What does GiftCardMall/MyGift refer to?",
    answer:
      "People use this phrase when looking for prepaid card balance, activation, or transaction guidance. The right process depends on the issuer and card program.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "GiftCardMall/MyGift Balance and Activation Guide",
        description: siteDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    ],
  };

  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label={`${siteName} home`}>
          <span className={styles.brandMark} aria-hidden="true">
            G
          </span>
          <span>{siteName}</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#balance">Balance guide</a>
          <a href="#activation">Activation</a>
          <a href="#using-your-card">Using your card</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              Prepaid card learning center
            </span>
            <h1>giftcardmall/mygift balance and activation guide</h1>
            <p className={styles.heroText}>
              Get clear answers about checking a balance, activating a card,
              understanding transactions, and sorting out common prepaid card
              problems.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#balance">
                Check the balance guide <span aria-hidden="true">→</span>
              </a>
              <a className={styles.textLink} href="#faq">
                Browse common questions
              </a>
            </div>
          </div>
          <aside className={styles.heroCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              ✓
            </div>
            <span className={styles.cardLabel}>A helpful first step</span>
            <h2>Start with the information that came with your card.</h2>
            <p>
              The card, its packaging, or the issuer’s documentation can point
              you to the right balance and activation process.
            </p>
          </aside>
        </section>

        <aside className={styles.notice} aria-label="Important information">
          <span className={styles.noticeIcon} aria-hidden="true">
            !
          </span>
          <p>
            <strong>Keep your card details private.</strong> {siteName} is an
            independent guide, not a card servicing page. Never share your full
            card number, PIN, or security code here.
          </p>
        </aside>

        <section className={styles.section} id="balance">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Balance information</span>
            <h2>GiftCardMall/MyGift Balance guide</h2>
            <p>
              For GiftCardMall balance questions, remember that available
              value can change after purchases or other activity. The issuer’s
              instructions are the best way to find the right balance-check
              service.
            </p>
          </div>
          <div className={styles.steps}>
            <article className={styles.step}>
              <span className={styles.stepNumber}>01</span>
              <h3>Find the instructions</h3>
              <p>
                Review the card, packaging, or purchase materials for balance
                instructions and support details.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.stepNumber}>02</span>
              <h3>Check the web address</h3>
              <p>
                Compare the address with the details supplied for your card.
                Don’t assume a search result or ad is the right destination.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.stepNumber}>03</span>
              <h3>Review recent activity</h3>
              <p>
                Purchases, refunds, and temporary authorizations can change the
                available amount or when it updates.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="activation">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Activation basics</span>
            <h2>Activating a prepaid gift card</h2>
            <p>
              Activation rules are different for each card program. Some cards
              are ready to use after purchase; others need an additional step
              from the cardholder.
            </p>
          </div>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                1
              </span>
              <h3>Check the receipt and packaging</h3>
              <p>
                Look for a note about whether the card was activated at
                purchase or needs further setup.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                2
              </span>
              <h3>Follow the card’s directions</h3>
              <p>
                Use the activation method described in the original materials.
                Avoid entering card details on unrelated websites.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                3
              </span>
              <h3>Ask the issuer if needed</h3>
              <p>
                If the card still does not work, contact the support provider
                listed with the card and keep your receipt if available.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.featureSection} id="using-your-card">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Card basics</span>
            <h2>Using a prepaid gift card</h2>
            <p>
              A Visa logo does not guarantee acceptance for every purchase.
              Check the card terms, the merchant’s requirements, and your
              available balance.
            </p>
          </div>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                ◇
              </span>
              <h3>Merchant acceptance</h3>
              <p>
                Check that the merchant takes your card network and allows
                prepaid cards for that purchase.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                $
              </span>
              <h3>Available funds</h3>
              <p>
                Confirm there are enough available funds for the total and any
                temporary authorization.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                ↗
              </span>
              <h3>Card restrictions</h3>
              <p>
                Online, international, or recurring payments may not be allowed
                on every prepaid card. Review its terms first.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.troubleshooting}>
          <div>
            <span className={styles.eyebrow}>Payment help</span>
            <h2>Was your card declined?</h2>
            <p>
              A rejected payment can have more than one cause. Check the
              available balance, activation status, and payment details, then
              review any card or transaction restrictions. If it still fails,
              contact the issuer using the details supplied with your card.
            </p>
          </div>
          <ul className={styles.checklist}>
            <li>See whether activation is required and has been completed.</li>
            <li>Review the balance, pending payments, and recent activity.</li>
            <li>Check that the merchant accepts this card type.</li>
            <li>Use the issuer’s contact details if the problem continues.</li>
          </ul>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Quick answers</span>
            <h2>Frequently asked questions</h2>
            <p>
              Quick guidance on balances, activation, card use, and keeping
              your details safe.
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map(({ question, answer }) => (
              <details className={styles.faqItem} key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.disclaimer}>
          <h2>About {siteName}</h2>
          <p>
            {siteName} is an independent informational resource. It is not
            affiliated with or endorsed by the named card brands, payment
            networks, financial institutions, retailers, or issuers. Terms and
            procedures vary by card; follow the instructions supplied with
            yours.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark} aria-hidden="true">
            G
          </span>
          <span>{siteName}</span>
        </a>
        <p>Independent prepaid card information.</p>
        <span>© 2026 {siteName}</span>
      </footer>
    </div>
  );
}
