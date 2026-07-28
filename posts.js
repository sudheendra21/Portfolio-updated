/* =====================================================================
   BLOG POSTS  —  this is the ONLY file you edit to add a new post.
   ---------------------------------------------------------------------
   To add a post: copy one { ... } block, paste it at the TOP of the
   array (newest first), and change the fields.

   Fields:
     slug     : unique id used in the URL (letters, numbers, dashes)
     title    : post title
     date     : "YYYY-MM-DD" (used for sorting + display)
     category : which section it belongs to, e.g. "Tech",
                "Interviews", "Lifestyle". Posts are grouped/filtered
                by this on the blog page. Make a new category just by
                typing a new name here — the filter tabs build
                themselves automatically.
     summary  : one line shown in the blog list
     tags     : array of short labels (shown as chips; optional)
     body     : the post content as HTML:
                <h2>Heading</h2> <p>Paragraph</p> <ul><li>item</li></ul>
                <pre><code>code block</code></pre> <a href="">link</a>
   ===================================================================== */

window.POSTS = [
  {
    slug: "designing-calm-systems",
    title: "Designing Calm Systems Under Load",
    date: "2026-06-01",
    category: "Tech",
    summary: "Notes on predictable latency, observability, and architectures teams can trust.",
    tags: ["Systems", "Backend"],
    body: `
      <p class="lede">A system is "calm" when the people who depend on it never have to think about it. Here's how I try to get there.</p>
      <h2>Start with the failure modes</h2>
      <p>Before writing a line of code, I list the ways the system can break: a slow dependency, a poisoned message, a node that disappears mid-request. Designing for these up front is cheaper than discovering them in production at 3am.</p>
      <h2>Make latency boring</h2>
      <p>Predictable p99 beats a fast average. Timeouts, bulkheads, and backpressure keep one slow component from taking the whole system down with it.</p>
      <ul>
        <li>Every outbound call has a timeout.</li>
        <li>Retries are bounded and jittered.</li>
        <li>Queues have a maximum depth — and a plan for when they fill.</li>
      </ul>
      <h2>Observability is a feature</h2>
      <p>If you can't see it, you can't trust it. Structured logs, traces across service boundaries, and a handful of SLOs that actually map to user pain are worth more than a hundred vanity dashboards.</p>
      <blockquote>Build calm for the people who rely on it.</blockquote>
      <p>This is a placeholder post — replace it with your own writing in <code>posts.js</code>.</p>
    `
  },
  {
    slug: "rag-in-production",
    title: "What I Learned Shipping RAG to Production",
    date: "2026-05-12",
    category: "Tech",
    summary: "Retrieval-augmented generation looks simple in a demo and gets interesting at scale.",
    tags: ["AI", "RAG"],
    body: `
      <p class="lede">The gap between a RAG demo and a RAG product is mostly about retrieval quality, evaluation, and cost.</p>
      <h2>Retrieval is the hard part</h2>
      <p>The model is rarely the bottleneck. Chunking strategy, embedding choice, and re-ranking decide whether the answer is grounded or hallucinated.</p>
      <h2>Evaluate continuously</h2>
      <p>Keep a small golden set of question/answer pairs and run it on every change. Without it you're flying blind.</p>
      <pre><code>// pseudo-eval loop
for (const q of goldenSet) {
  const answer = await rag(q.question);
  score(answer, q.expected);
}</code></pre>
      <p>This is a placeholder post — replace it with your own writing in <code>posts.js</code>.</p>
    `
  },
  {
    slug: "interview-oracle",
    title: "Interview Experience: Oracle",
    date: "2026-04-20",
    category: "Interviews",
    summary: "How I prepped for and walked through Oracle's backend systems loop.",
    tags: ["Career", "Oracle"],
    body: `
      <p class="lede">A short write-up of a recent systems design interview and what I'd do differently.</p>
      <h2>The prompt</h2>
      <p>Design a service that ingests millions of events per minute and exposes near-real-time aggregates. Classic, but the follow-ups are where it gets fun.</p>
      <h2>What worked</h2>
      <ul>
        <li>Clarifying requirements before drawing boxes.</li>
        <li>Talking through trade-offs out loud.</li>
        <li>Naming the consistency model explicitly.</li>
      </ul>
      <p>This is a placeholder post — replace it with your own writing in <code>posts.js</code>.</p>
    `
  },
  {
    slug: "interview-tesla",
    title: "Interview Experience: Tesla",
    date: "2026-03-08",
    category: "Interviews",
    summary: "Notes from a fast-paced onsite and the questions that caught me off guard.",
    tags: ["Career", "Tesla"],
    body: `
      <p class="lede">Tesla's loop moved quickly and leaned practical. Here's what I remember.</p>
      <h2>Coding</h2>
      <p>Less leetcode-trivia, more "can you write clean, working code under a clock." Talk while you type.</p>
      <h2>System design</h2>
      <p>Grounded in their actual domain. Knowing why a choice matters beat reciting buzzwords.</p>
      <p>This is a placeholder post — replace it with your own writing in <code>posts.js</code>.</p>
    `
  },
  {
    slug: "balance-and-burnout",
    title: "On Balance, Coffee, and Not Burning Out",
    date: "2026-02-14",
    category: "Lifestyle",
    summary: "Guitar, long walks, and why stepping away from the screen makes me a better engineer.",
    tags: ["Life", "Habits"],
    body: `
      <p class="lede">The best debugging I do is often away from the keyboard.</p>
      <h2>Protecting focus</h2>
      <p>Deep work needs guarding. I batch shallow tasks and keep mornings for the hard problems.</p>
      <h2>Stepping away</h2>
      <p>A walk, a guitar, a race on TV — the subconscious keeps working while I rest. Solutions arrive when I stop forcing them.</p>
      <p>This is a placeholder post — replace it with your own writing in <code>posts.js</code>.</p>
    `
  }
];
