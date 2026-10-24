const officialPortal = "https://giftcardmall.vip/";

const faqs = [
  {
    question: "What is GiftCardMall/MyGift?",
    answer:
      "MyGift is a cardholder portal for eligible GiftCardMall cards. Depending on your card, it may let you check the available balance, review transactions, or register a billing ZIP code. Follow the instructions and terms supplied with your card.",
  },
  {
    question: "How do I check my GiftCardMall/MyGift balance?",
    answer:
      "Use the official MyGift page linked from your card materials or GiftCardMall. You will need the information requested by the issuer. You can also call the support number printed on your card.",
  },
  {
    question: "Is this website the official GiftCardMall site?",
    answer:
      "No. GiftBestMall Guides is an independent publisher and is not affiliated with GiftCardMall, MyGift, Visa, or any card issuer. This guide cannot access your card or check its balance.",
  },
  {
    question: "Why was my GiftCardMall/MyGift Visa card declined?",
    answer:
      "Common reasons include an unregistered billing ZIP code, an insufficient balance after tax and shipping, incorrect card details, a pending hold, or card-specific activation or expiration rules. Check your card terms and contact the issuer if needed.",
  },
  {
    question: "Can I use a GiftCardMall card online?",
    answer:
      "Some cards can be used online, but acceptance and registration requirements vary by card and merchant. Review your card materials and the issuer's official portal for the rules that apply to your card.",
  },
  {
    question: "Is it safe to enter my card number on other websites to check the balance?",
    answer:
      "Only enter card information on the official issuer or cardholder portal identified by your card materials. This independent guide does not ask for or collect card numbers, expiration dates, security codes, or billing details.",
  },
];

const declineReasons = [
  {
    symptom: "Card declined online",
    cause: "Billing ZIP code may not be registered",
    action: "Check the official portal for registration options, then retry with the same ZIP code.",
  },
  {
    symptom: "Declined for the full purchase price",
    cause: "Available balance may not cover the total, including tax and shipping",
    action: "Check the balance and ask the merchant whether split payment is allowed.",
  },
  {
    symptom: "Card details rejected",
    cause: "Card number, expiration date, or security code may have been mistyped",
    action: "Carefully re-enter the details on the merchant's secure checkout page.",
  },
  {
    symptom: "Balance lower than expected",
    cause: "A pending authorization or merchant hold may affect the available balance",
    action: "Ask the merchant about the hold or contact the card issuer for help.",
  },
  {
    symptom: "Card refused everywhere",
    cause: "The card may be expired, inactive, or subject to card-specific restrictions",
    action: "Check the expiration date and contact the support number printed on the card.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="GiftBestMall Guides home">
            <span className="brand-mark" aria-hidden="true">G</span>
            <span>GiftBestMall <span className="brand-light">Guides</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#check">Check balance</a>
            <a href="#register">Register</a>
            <a href="#problems">Fix problems</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="eyebrow"><span className="eyebrow-dot" /> Independent cardholder guide</div>
            <h1>GiftCardMall/MyGift: <span>Check Your GiftCardMall Balance</span></h1>
            <p className="hero-description">
              Find clear GiftCardMall/MyGift balance check steps, learn how
              GiftCardMall/MyGift card registration may work, and troubleshoot
              common payment problems. This independent guide helps you find the
              right information without collecting your card details.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#check">Check GiftCardMall balance <span aria-hidden="true">↓</span></a>
              <a className="button button-light" href="#faq">Read the FAQ <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-notice">
              <span className="notice-icon" aria-hidden="true">i</span>
              <p><strong>Quick answer:</strong> Visit the official <a href={officialPortal} target="_blank" rel="noopener noreferrer">GiftCardMall/MyGift page</a>, reached from <a href="https://www.giftcardmall.com/" target="_blank" rel="noopener noreferrer">GiftCardMall</a> or your card materials. Follow the issuer&apos;s instructions to check your available balance. You can also call the number printed on your card.</p>
            </div>
            <p className="independent-note">
              This is an independent guide, not the official GiftCardMall/MyGift site. We do not check balances or collect card details. Enter private information only on the verified issuer portal.
            </p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container article-narrow">
            <span className="section-kicker">The basics</span>
            <h2>What is GiftCardMall/MyGift?</h2>
            <p>
            GiftCardMall/MyGift refers to GiftCardMall prepaid cards and the
            MyGift cardholder portal for eligible cards. People searching for
            “GiftCardMall/MyGift” often want to check a GiftCardMall balance,
            review card activity, or learn about registration.
            </p>
            <p>
            Some GiftCardMall cards carry a Visa or Mastercard logo. Through
            the MyGift portal, eligible cardholders may be able to view
            balance information, transaction history, or registration
            options. Features and terms vary by card, so follow the
            information supplied with yours.
            </p>
          </div>
        </section>

        <section className="section section-soft" id="check">
          <div className="container article-layout">
            <div className="article-main">
              <span className="section-kicker">Balance check</span>
              <h2>How to check your GiftCardMall/MyGift balance</h2>
              <p className="section-lede">Have your card available. Checking a balance usually takes a few minutes.</p>
              <ol className="steps">
                <li>
                  <span className="step-number">1</span>
                  <div><h3>Find your card instructions</h3><p>Review the back of the card and its packaging for the official balance-check address and support number. Keep the card details private.</p></div>
                </li>
                <li>
                  <span className="step-number">2</span>
                  <div><h3>Open the official GiftCardMall/MyGift page</h3><p>Use the address or link identified by your card materials or navigate from <a href="https://www.giftcardmall.com/" target="_blank" rel="noopener noreferrer">GiftCardMall.com</a>. Avoid sponsored search results, unexpected texts, and email links.</p></div>
                </li>
                <li>
                  <span className="step-number">3</span>
                  <div><h3>Follow the issuer&apos;s prompts</h3><p>If you choose to continue, enter requested information only on the verified issuer site. This guide never asks you to submit card details here.</p></div>
                </li>
                <li>
                  <span className="step-number">4</span>
                  <div><h3>Review the available balance</h3><p>Check the available balance and recent activity shown by the portal. Pending transactions or merchant holds may affect the amount.</p></div>
                </li>
                <li>
                  <span className="step-number">5</span>
                  <div><h3>Contact the card issuer if needed</h3><p>If you cannot access the portal or have questions, call the support number printed on your card.</p></div>
                </li>
              </ol>
              <p className="article-footnote">Processes differ among card programs. Follow the instructions provided with your specific card.</p>
            </div>
            <aside className="side-card">
              <span className="side-card-icon" aria-hidden="true">↗</span>
              <h3>Use the official cardholder portal</h3>
              <p>For account-specific balance and transaction information, follow the link in your card materials and verify the web address before proceeding.</p>
              <a className="button button-dark button-full" href={officialPortal} target="_blank" rel="noopener noreferrer">Go to MyGift <span aria-hidden="true">↗</span></a>
              <small>You&apos;ll leave this independent guide. Never share card details through this site.</small>
            </aside>
          </div>
        </section>

        <section className="section" id="register">
          <div className="container article-layout">
            <div className="article-main">
              <span className="section-kicker">Registration</span>
              <h2>GiftCardMall/MyGift card registration</h2>
              <p>
                Some card programs let cardholders register a billing ZIP code.
                An online merchant may verify billing details at checkout, so a
                mismatch or missing registration can sometimes cause a payment
                to be declined—even when the available balance appears sufficient.
              </p>
              <h3 className="subheading">When registration may help</h3>
              <ul className="check-list">
                <li>Online stores that verify the billing ZIP code associated with a card.</li>
                <li>Some subscriptions or digital services, subject to the card&apos;s terms.</li>
                <li>Viewing transaction history or card settings offered by the issuer portal.</li>
              </ul>
              <p className="article-footnote">Registration features and eligibility vary. Check the paperwork that came with your card and use only the official portal.</p>
            </div>
            <aside className="side-card side-card-green">
              <span className="section-kicker">Before you register</span>
              <h3>Check your card&apos;s specific terms</h3>
              <p>Not every card has the same online features. Follow the instructions supplied by the card issuer rather than relying on a third-party guide.</p>
              <a className="inline-link" href={officialPortal} target="_blank" rel="noopener noreferrer">Open the official MyGift portal <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </section>

        <section className="section section-soft" id="problems">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Troubleshooting</span>
              <h2>Why a GiftCardMall card may be declined</h2>
              <p>Common possibilities to review. The issuer can confirm what applies to your card.</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>What you notice</th><th>Possible reason</th><th>What to try</th></tr></thead>
                <tbody>
                  {declineReasons.map((item) => (
                    <tr key={item.symptom}><th scope="row">{item.symptom}</th><td>{item.cause}</td><td>{item.action}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container article-layout">
            <div className="article-main">
              <span className="section-kicker">Cardholder safety</span>
              <h2>Stay safe when checking a GiftCardMall balance</h2>
              <ul className="check-list">
                <li>Use the official address printed on your card or packaging; avoid links in unexpected messages.</li>
                <li>Never send your card number or security code to someone who contacts you unexpectedly.</li>
                <li>Be wary of anyone asking you to pay a debt or fee with gift card details.</li>
                <li>If your card is lost, contact the issuer using the number or instructions provided with the card.</li>
              </ul>
            </div>
            <aside className="safety-card">
              <span className="safety-symbol" aria-hidden="true">!</span>
              <h3>Protect your card like cash</h3>
              <p>This site does not check balances and will never ask for your card number, expiration date, security code, or billing information.</p>
            </aside>
          </div>
        </section>

        <section className="section section-soft" id="related">
          <div className="container article-narrow">
            <span className="section-kicker">Related searches</span>
            <h2>GiftCardMall/MyGift searches and terms</h2>
            <div className="related-list">
            <article><h3>GiftCardMall/MyGift balance</h3><p>This search commonly means finding balance information for an eligible GiftCardMall card through its official MyGift cardholder service.</p></article>
              <article><h3>GiftCardMall.com MyGift</h3><p>Use your card materials to find the intended cardholder portal, or navigate from the <a href="https://www.giftcardmall.com/" target="_blank" rel="noopener noreferrer">GiftCardMall website</a>.</p></article>
              <article><h3>GiftCardMall/MyGift Visa</h3><p>This phrase may refer to an eligible prepaid Visa card managed through MyGift. Acceptance, balance tools, registration, and other features depend on the card&apos;s terms.</p></article>
              <article><h3>Gift card mall and GiftCardMall card</h3><p>People may use these phrases when looking for prepaid gift-card information. Check the instructions for your particular card.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-container">
            <div className="section-heading">
              <span className="section-kicker">Common questions</span>
              <h2>GiftCardMall/MyGift balance check FAQ</h2>
            </div>
            <div className="faq-list">
              {faqs.map(({ question, answer }, index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
            <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">G</span>
            <span>GiftBestMall <span className="brand-light">Guides</span></span>
          </a>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#check">Check balance</a>
            <a href="#register">Register</a>
            <a href="#problems">Fix problems</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p>Last updated: October 22, 2026. GiftBestMall Guides is an independent publisher. GiftCardMall, MyGift, and Visa are trademarks of their respective owners, used only to identify the services discussed. This page provides general information, not financial advice.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
