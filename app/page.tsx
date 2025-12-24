import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Mail, Shield, Clock, Bell, Zap, Target, TrendingUp, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <svg className="h-9 w-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" rx="16" fill="url(#pledgeGrad)" />
                <path
                  d="M35 45L45 55L65 35"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="70" r="4" fill="white" />
                <defs>
                  <linearGradient id="pledgeGrad" x1="10" y1="10" x2="90" y2="90">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-foreground">PledgeOS</span>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <Link
                  href="/security"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security
                </Link>
              </nav>
              <Button asChild size="sm">
                <a href="http://localhost:3000/auth/google">Connect Gmail</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance mb-6">
              Accountability without micromanagement.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 leading-relaxed">
              PledgeOS tracks promises from Gmail. Ensures nothing gets forgotten. Sends focused reminders. Zero manual
              input.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 h-12" asChild>
                <a href="http://localhost:3000/auth/google">Connect Gmail</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Read-only access
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                No permanent storage
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Revoke anytime
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Core Problem */}
      <section className="py-24 md:py-32 border-b border-border/50 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance mb-6">
              Execution gaps cost credibility.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You say you'll deliver. Then life happens. Inboxes overflow. Promises slip through. Commitments get
              forgotten. Trust erodes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: AlertCircle, title: "Missed Follow-ups", desc: "Forgotten promises damage relationships" },
              { icon: Clock, title: "Buried Commitments", desc: "Critical tasks lost in email threads" },
              { icon: TrendingUp, title: "No Visibility", desc: "Can't see what's overdue or coming" },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-border bg-card text-center">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance mb-6">
              Turn email into an accountability system.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PledgeOS scans Gmail, detects commitments, and sends you one focused email each morning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, title: "Connects to Gmail", desc: "Read-only OAuth. No permanent storage." },
              { icon: Zap, title: "Detects Promises", desc: '"I will", "can you", "by Friday", "let me send"' },
              { icon: Bell, title: "Sends Daily Summary", desc: "Due today, overdue, coming soon. No spam." },
              { icon: Target, title: "Tracks Fulfillment", desc: "Marks resolved threads automatically." },
            ].map((item, i) => (
              <Card key={i} className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-base font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 md:py-32 border-b border-border/50 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-6">
                Daily commitment summary
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every morning, PledgeOS sends a structured email with unresolved commitments. Nothing to configure. No
                app to check. Just a clear daily reminder.
              </p>
              <ul className="space-y-4">
                {[
                  "Due today",
                  "Overdue items with context",
                  "Coming up this week",
                  "Fulfilled threads excluded automatically",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 border-border bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <Bell className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-card-foreground">Today's Commitments</span>
                </div>
                {[
                  { status: "Due Today", count: 3, color: "bg-cyan-500" },
                  { status: "Overdue", count: 1, color: "bg-red-500" },
                  { status: "This Week", count: 5, color: "bg-blue-500" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium text-card-foreground">{item.status}</span>
                    </div>
                    <span className="text-lg font-bold text-card-foreground">{item.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="p-8 border-border bg-card order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-card-foreground">Smart Detection</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: '"I will send this by EOD"', type: "Promise" },
                    { label: '"Can you review by Friday?"', type: "Request" },
                    { label: '"Let me get back to you tomorrow"', type: "Commitment" },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border/50">
                      <p className="text-sm text-card-foreground mb-1">{item.label}</p>
                      <span className="text-xs text-primary font-medium">{item.type} detected</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-6">
                Smart promise detection
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                PledgeOS understands natural language. It detects commitments you make and requests you receive, then
                extracts implied deadlines.
              </p>
              <ul className="space-y-4">
                {[
                  '"I will", "we\'ll", "let me" patterns',
                  '"Can you", "please send", "need by" requests',
                  "Deadline extraction: EOD, tomorrow, Friday, next week",
                  "Tracks both promises made and received",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* No Manual Work */}
      <section className="py-24 md:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance mb-6">
              No dashboards. No task lists. No manual entry.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              PledgeOS works entirely from your Gmail. You don't add tasks. You don't update statuses. You just read
              your daily reminder and deliver.
            </p>
            <Card className="p-8 border-border bg-card text-left max-w-2xl mx-auto">
              <div className="space-y-4">
                {[
                  { text: "No app to open", icon: Check },
                  { text: "No tasks to create", icon: Check },
                  { text: "No status updates needed", icon: Check },
                  { text: "Works from your existing workflow", icon: Check },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base text-card-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 border-b border-border/50 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Simple pricing. Scale as you grow.</h2>
            <p className="text-lg text-muted-foreground">
              Built for serious professionals who value their commitments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individual Plan */}
            <Card className="p-10 border-2 border-border bg-card relative overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Individual</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-card-foreground">$5</span>
                  <span className="text-lg text-muted-foreground">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Personal commitment tracking</p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Daily reminder emails for your commitments",
                    "Unlimited promise tracking from Gmail",
                    "Automatic deadline detection",
                    "Overdue commitment alerts",
                    "Email support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 text-base bg-transparent" variant="outline" asChild>
                  <a href="http://localhost:3000/auth/google">Connect Gmail</a>
                </Button>
              </div>
            </Card>

            {/* Team Analytics Plan */}
            <Card className="p-10 border-2 border-primary bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Team Analytics</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-card-foreground">$9</span>
                  <span className="text-lg text-muted-foreground">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Individual analytics + client tracking</p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Everything in Individual plan",
                    "Weekly analytics reports for your commitments",
                    "Client commitment dashboard",
                    "Track commitments made to clients",
                    "Monitor commitments fulfilled vs pending",
                    "Performance insights and trends",
                    "Priority email support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 text-base" disabled>
                  Coming Soon
                </Button>
              </div>
            </Card>

            {/* Manager Dashboard Plan */}
            <Card className="p-10 border-2 border-border bg-card relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Manager Dashboard</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-card-foreground">$15</span>
                  <span className="text-lg text-muted-foreground">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Full team oversight and monitoring</p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Everything in Team Analytics plan",
                    "Complete manager oversight dashboard",
                    "Monitor all employee commitments",
                    "Real-time team performance metrics",
                    "Individual employee accountability scores",
                    "Team-wide completion rate tracking",
                    "Custom reports and exports",
                    "Dedicated priority support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 text-base bg-transparent" variant="outline" disabled>
                  Coming Soon
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-24 md:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Privacy-first design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your emails are yours. PledgeOS uses read-only access, never stores messages, and you can revoke access
              instantly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "OAuth-based", desc: "Google-authorized secure authentication" },
              { icon: Mail, title: "Read-only", desc: "Can't send, delete, or modify emails" },
              { icon: Clock, title: "No storage", desc: "Emails processed, not permanently saved" },
              { icon: Check, title: "Revocable", desc: "Disconnect access anytime from Google" },
            ].map((item, i) => (
              <Card key={i} className="p-6 border-border bg-card text-center">
                <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-base font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/security" className="text-sm text-primary hover:underline">
              Read our full security documentation →
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 md:py-32 border-b border-border/50 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Built for professionals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Founders", desc: "Never miss commitments to investors, customers, or your team." },
              { title: "Managers", desc: "Stay on top of delegated tasks without micromanaging." },
              { title: "Consultants", desc: "Track client promises and maintain a reputation for reliability." },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-border bg-card">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-8">
              Start delivering on what you promise.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Connect your Gmail in 30 seconds. Get your first reminder tomorrow morning.
            </p>
            <Button size="lg" className="text-base px-8 h-12" asChild>
              <a href="http://localhost:3000/auth/google">Connect Gmail</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" rx="16" fill="url(#pledgeGrad)" />
                <path
                  d="M35 45L45 55L65 35"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="70" r="4" fill="white" />
                <defs>
                  <linearGradient id="pledgeGrad" x1="10" y1="10" x2="90" y2="90">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold text-foreground">PledgeOS</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/security" className="hover:text-foreground transition-colors">
                Security
              </Link>
              <a href="mailto:pledgeos@gmail.com" className="hover:text-foreground transition-colors">
                pledgeos@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 PledgeOS. Accountability without micromanagement.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
