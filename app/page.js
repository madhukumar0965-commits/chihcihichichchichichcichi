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
    question: "What does GiftCardMall/MyGift balance mean?",
    answer:
      "It refers to the available value on a prepaid card. Purchases, refunds, and pending authorizations can affect the amount shown.",
  },
  {
    question: "Where can I find GiftCardMall/MyGift balance information?",
    answer:
      "Use the balance and support instructions printed on your card or packaging, and verify the website address before entering private details.",
  },
  {
    question: "Is GiftCardPortal an official GiftCardMall/MyGift website?",
    answer:
      "No. GiftCardPortal is an independent information resource and is not affiliated with or endorsed by GiftCardMall, MyGift, or a card issuer.",
  },
  {
    question: "What does GiftCardMall/MyGift refer to?",
    answer:
      "People use this phrase when looking for prepaid card balance, activation, or transaction guidance. The right process depends on the issuer and card program.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://giftcardportal.vip/#website",
        "url": "https://giftcardportal.vip/",
        "name": "GiftCardPortal",
        "description":
          "Practical information on prepaid gift card balances, card activation, and everyday usage.",
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://giftcardportal.vip/#organization",
        "name": "GiftCardPortal",
        "url": "https://giftcardportal.vip/",
        "description":
          "Explore how to find your GiftCardMall/MyGift real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
      },
      {
        "@type": "WebPage",
        "@id": "https://giftcardportal.vip/#webpage",
        "url": "https://giftcardportal.vip/",
        "name": "GiftCardMall/MyGift Balance and Activation Guide | GiftCardPortal",
        "description":
          "Explore how to find your GiftCardMall/MyGift real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
        "isPartOf": {
          "@id": "https://giftcardportal.vip/#website",
        },
        "about": [
          {
            "@type": "Thing",
            "name": "GiftCardMall/Mygift",
          },
          {
            "@type": "Thing",
            "name": "Prepaid gift card balance",
          },
          {
            "@type": "Thing",
            "name": "Gift card activation",
          },
          {
            "@type": "Thing",
            "name": "Prepaid Visa cards",
          },
        ],
        "inLanguage": "en-US",
      },
      {
        "@type": "Article",
        "@id": "https://giftcardportal.vip/#article",
        "headline": "GiftCardMall/MyGift Balance and Activation Guide",
        "description":
          "Explore how to find your GiftCardMall/MyGift real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
        "mainEntityOfPage": {
          "@id": "https://giftcardportal.vip/#webpage",
        },
        "author": {
          "@type": "webpage",
          "name": "GiftCardPortal",
        },
        "publisher": {
          "@id": "https://giftcardportal.vip/#webpage",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": "https://giftcardportal.vip/#faq",
        "mainEntity": faqs.map(({ question, answer }) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="GiftCardPortal home">
            <span className="brand-icon">G</span>
            <span>GiftCardPortal</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#guide">Overview</a>
            <a href="#balance">Balance</a>
            <a href="#activation">Activation</a>
            <a href="#visa">Visa Usage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <div id="top"></div>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Prepaid Card Learning Center</div>

              <h1>
                Your Practical Guide to{" "}
                <span>GiftCardMall/Mygift</span>
              </h1>

              <p className="hero-copy">
                Learn how prepaid GiftCardMall/Mygift balance work, where to find
                card-specific instructions, what activation can involve and why
                some online transactions may not succeed. This guide organizes
                common questions into clear, practical answers.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href="#balance">
                  Check your balance
                </a>
                <a className="btn btn-secondary" href="#faq">
                  Browse Questions
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="card-label">Start with the basics</div>
              <h2>Before you check your card balance</h2>

              <div className="mini-answer">
                <strong>Find the original card instructions</strong>
                <p>
                  Check the back of your card, its packaging, or the
                  issuer&apos;s documents to find the correct way to manage
                  your card.
                </p>
              </div>

              <div className="mini-answer">
                <strong>Protect your payment details</strong>
                <p>
                  Verify the web address before entering information. This
                  independent guide never needs your full card number, PIN or
                  CVV.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* NOTICE BANNER */}
        <div className="notice">
          <div className="container notice-inner">
            <div className="notice-icon">!</div>
            <p>
              <strong>Independent resource:</strong> GiftCardPortal is an
              independent informational website and is not the official
              GiftCardMall or MyGift website. It is not affiliated with
              Blackhawk Network, Visa, Mastercard, American Express, any bank,
              retailer, or individual card issuer. Please refer to the
              instructions provided with your specific gift card.
            </p>
          </div>
        </div>

        {/* GUIDE / ESSENTIALS SECTION */}
        <section id="guide">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">The essentials</div>
              <h2>Prepaid Gift Cards: Key Information and Tips</h2>
              <p>
                Gift card questions generally involve checking available funds,
                completing card activation, confirming payment options, or
                troubleshooting unsuccessful transactions. Knowing which topic
                applies to your situation can save time and simplify the
                process.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Quick explanation</span>
              <p>
                GiftCardMall/MyGift-related queries commonly focus on prepaid
                gift card services. Before checking your available balance or
                managing your card, review the specific program requirements
                and follow the guidance supplied by your card issuer.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <div className="icon-box">01</div>
                <h3>Balance awareness</h3>
                <p>
                  Find out how much value remains on your card and how
                  transactions, temporary payment holds, or refunds can affect
                  your displayed balance.
                </p>
              </article>

              <article className="info-card">
                <div className="icon-box">02</div>
                <h3>Activation Guide</h3>
                <p>
                  Explore how to find activation information for your gift card
                  and learn why specific requirements depend on the program and
                  its issuer.
                </p>
              </article>

              <article className="info-card">
                <div className="icon-box">03</div>
                <h3>Resolving Payment Issues</h3>
                <p>
                  Find helpful information about declined gift card payments,
                  potential transaction errors, and practical ways to determine
                  what to do next.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BALANCE SECTION */}
        <section id="balance" className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Balance information</div>
              <h2>How to Verify Your GiftCardMall Gift Card Balance</h2>
              <p>
                Checking your gift card balance lets you see how much money is
                available before making a new purchase. Keep in mind that the
                displayed amount may change based on recent transactions rather
                than the card&apos;s initial value.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Direct answer</span>
              <p>
                To find your <strong>giftcardmall/mygift balance</strong>, first review
                the instructions included with your card or packaging. Confirm
                that you are visiting the correct website before submitting any
                confidential payment or card information.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <h3>Review Your Gift Card Details</h3>
                  <p>
                    Check your card for balance inquiry instructions, customer
                    support information, and any terms specific to your gift
                    card program.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <h3>Check the Website URL Carefully</h3>
                  <p>
                    Make sure the domain is correct before sharing any
                    information, and stay away from suspicious links requesting
                    private card details.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <h3>Check Your Recent Gift Card Transactions</h3>
                  <p>
                    Changes to your gift card balance may occur because of
                    pending transactions, recent spending, or refunds that take
                    time to appear on your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BALANCE TERMINOLOGY */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Balance terminology</div>
              <h2>How GiftCardMall/MyGift Card Balances Work</h2>
              <p>
                People commonly enter this combined term to discover their
                prepaid card&apos;s available value and review the relevant
                directions.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Available balance</h3>
                <p>
                  A giftcardmall/mygift card&apos;s  available balance shows the amount that can
                  currently be used for qualifying transactions. Spending may
                  reduce it below the initial amount added to the card.
                </p>
              </article>

              <article className="info-card">
                <h3>Pending transactions</h3>
                <p>
                  A merchant may temporarily authorize an amount before
                  completing a payment. As a result, the available balance may
                  not match the total of finalized purchases.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BRAND CONTEXT */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Brand and search context</div>
              <h2>What does giftcardmall refer to?</h2>
              <p>
                A general search may indicate various needs, including gift card
                details, activation guidance, or payment assistance. However,
                not every website mentioning a card&apos;s name provides
                official support services.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Card information</h3>
                <p>
                  Check the materials provided with your card to learn about its
                  terms, conditions, and available features.
                </p>
              </article>

              <article className="info-card">
                <h3>Balance and activity</h3>
                <p>
                  Know the difference between the card&apos;s starting value,
                  completed payments, and amounts temporarily reserved for
                  transactions.
                </p>
              </article>

              <article className="info-card">
                <h3>Support options</h3>
                <p>
                  Contact the card issuer through its official support channels
                  for assistance with a specific card or transaction.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ADDRESS VERIFICATION */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Address verification</div>
              <h2>Searching for www.giftcardmall.com mygift</h2>
              <p>
                A search for a complete URL may indicate that someone wants to
                visit a specific card-related website or service.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Before you continue</span>
              <p>
                If you search for{" "}
                <strong>www.giftcardmall.com mygift</strong>, verify the
                website address against the instructions provided on your card
                or its packaging. Search results and advertisements alone do not
                confirm that a page is the official destination for your
                particular card.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Inspect the domain</h3>
                <p>
                  Look for misspellings, unexpected subdomains or additional
                  words that change the address.
                </p>
              </article>

              <article className="info-card">
                <h3>Be cautious with messages</h3>
                <p>
                  Messages requesting your card details without warning should
                  be handled carefully, regardless of how recognizable their
                  wording appears.
                </p>
              </article>

              <article className="info-card">
                <h3>Use original documentation</h3>
                <p>
                  The card&apos;s own documentation is the primary reference for
                  identifying the intended channel for servicing and assistance.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ACTIVATION SECTION */}
        <section id="activation">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Activation basics</div>
              <h2>How prepaid gift card activation works</h2>
              <p>
                The GiftCardMall/Mygift activation process depends on the type of card. Certain
                cards are activated when purchased, whereas others need further
                instructions to be followed before they can be used.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Check activation status</h3>
                <p>
                  Check the documentation included with your purchase to see
                  whether activation was successful or further instructions must
                  be followed.
                </p>
              </article>

              <article className="info-card">
                <h3>Follow the correct process</h3>
                <p>
                  Use the official activation information supplied for your
                  card, and do not share payment credentials with websites that
                  merely mention the card&apos;s name.
                </p>
              </article>
            </div>

            <div className="answer-box" style={{ marginTop: "20px" }}>
              <span className="label">Practical tip</span>
              <p>
                If your card still does not work after following the provided
                instructions, contact the issuer or support service identified
                in the card documentation. Retain your purchase receipt if
                possible.
              </p>
            </div>
          </div>
        </section>

        {/* VISA USAGE SECTION */}
        <section id="visa" className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Payment network basics</div>
              <h2>What is giftcardmall/mygift visa?</h2>
              <p>
                Searches that include the term Visa may refer to prepaid cards
                operating on the Visa payment network. However, network
                participation does not mean that every merchant or transaction
                type will be accepted.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Direct answer</span>
              <p>
                The search term <strong>giftcardmall/mygift visa</strong> may
                relate to a prepaid gift card bearing the Visa brand. Whether
                the card can be used for a specific transaction depends on its
                conditions, merchant acceptance, remaining balance, and
                purchase category.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Merchant acceptance</h3>
                <p>
                  Make sure the store accepts your card network and prepaid card
                  type.
                </p>
              </article>

              <article className="info-card">
                <h3>Re-Check payment details</h3>
                <p>
                  Follow your card issuer&apos;s instructions for any billing
                  details requested by the merchant.
                </p>
              </article>

              <article className="info-card">
                <h3>Payment limits</h3>
                <p>
                  Card limits may apply to international, subscription, or
                  special payments.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* RELATED SEARCHES */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Related searches</div>
              <h2>Understanding mygift giftcardmall queries</h2>
              <p>
                Searching with a specific card name usually means the user needs
                help with balance, activation, or card usage. Knowing their
                goal helps clarify the next step.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Why people use this phrase</h3>
                <p>
                  Searching for <strong>mygift giftcardmall</strong> usually
                  means a user is looking for card details, balance checks, or
                  online checkout help.
                </p>
              </article>

              <article className="info-card">
                <h3>How to begin</h3>
                <p>
                  Review your card and the attached paperwork to quickly find
                  your card issuer, usage instructions, and specific terms.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PAYMENT TROUBLESHOOTING */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Payment troubleshooting</div>
              <h2>Common reasons a prepaid card may be declined</h2>
              <p>
                First, check your balance—if that looks fine, look into other
                common reasons your card might be declining.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Common causes</h3>
                <ul>
                  <li>Low or insufficient balance</li>
                  <li>Store or transaction limits</li>
                  <li>Wrong payment information</li>
                  <li>Activation not completed</li>
                  <li>Card not activated yet</li>
                  <li>Expired card or card-specific rules</li>
                </ul>
              </article>

              <article className="info-card">
                <h3>Steps to consider</h3>
                <ul>
                  <li>Check your remaining balance.</li>
                  <li>Make sure the merchant takes this card.</li>
                  <li>Double-check your payment information.</li>
                  <li>Review the card guidelines.</li>
                  <li>Call card support if the issue continues.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* CARDHOLDER SAFETY */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Cardholder safety</div>
              <h2>Keep your gift card details private</h2>
              <p>
                Prepaid card details are as valuable as cash. Keep your card info
                safe and double-check where you are sending it before sharing
                anything sensitive.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Good security practices</h3>
                <ul>
                  <li>
                    Use the official contact details provided with your card.
                  </li>
                  <li>
                    Double-check the website address before entering details.
                  </li>
                  <li>Save all payment receipts and transaction records.</li>
                  <li>
                    Never post your card numbers or details on social media or
                    forums.
                  </li>
                  <li>
                    Watch out for suspicious messages offering free prizes or
                    unexpected refunds.
                  </li>
                </ul>
              </article>

              <article className="info-card">
                <h3>Information you do not need to provide</h3>
                <p>
                  GiftCardPortal will never ask for your full card number, PIN,
                  CVV, password, or private account details. Never share this
                  sensitive information in public forms, comments, or
                  messages.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Common questions</div>
              <h2>GiftCardMall/Mygift FAQ</h2>
              <p>
                Clear, quick answers to common questions about checking your
                balance, activating your card, store acceptance, and staying
                safe.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map(({ question, answer }, index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>

            <div className="cta">
              <h2>Start with the right information</h2>
              <p>
                For your security, please refer to your card&apos;s included
                documentation, confirm the official support web address, and
                check the guide above before making any updates.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#balance">
                  Balance Guide
                </a>
                <a className="btn btn-secondary" href="#activation">
                  Activation Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">GiftCardPortal</div>
              <p>
                An independent educational resource for prepaid gift card users.
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#guide">Overview</a>
              <a href="#balance">Balance</a>
              <a href="#activation">Activation</a>
              <a href="#visa">Visa Usage</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>

          <div className="disclaimer">
            <strong>Disclaimer:</strong> GiftCardPortal is an independent
            informational website. It is not affiliated with or endorsed by
            GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard, American
            Express, any bank, retailer or card issuer. Card terms and
            procedures may vary. Follow the instructions provided with your
            specific card.
          </div>

          <div className="copyright">
            © 2026 GiftCardPortal. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
