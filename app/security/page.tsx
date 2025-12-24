import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Key, Eye, Server, RefreshCw } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur sticky top-0 z-50">
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
            <Button asChild size="sm" variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Security at PledgeOS</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your email data is sensitive. We've built PledgeOS with privacy and security as core principles, not
            afterthoughts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "OAuth 2.0 Authentication",
              desc: "Google-authorized secure authentication. No passwords stored. Industry-standard protocol.",
            },
            {
              icon: Lock,
              title: "Read-Only Access",
              desc: "PledgeOS can only read emails. Cannot send, delete, modify, or access other Google services.",
            },
            {
              icon: Eye,
              title: "No Permanent Storage",
              desc: "Emails are processed in real-time and discarded. Only metadata about commitments is retained.",
            },
            {
              icon: Key,
              title: "Encrypted Tokens",
              desc: "All OAuth tokens are encrypted at rest using AES-256 encryption standards.",
            },
            {
              icon: Server,
              title: "Secure Infrastructure",
              desc: "Hosted on enterprise-grade cloud infrastructure with SOC 2 compliance.",
            },
            {
              icon: RefreshCw,
              title: "Revocable Access",
              desc: "Disconnect PledgeOS instantly from your Google Account settings. Immediate effect.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-border bg-card">
              <item.icon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Authentication Flow</h2>
            <Card className="p-8 border-border bg-card">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">You click "Connect Gmail"</h4>
                    <p className="text-sm text-muted-foreground">
                      Redirects you to Google's official OAuth consent screen.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Google asks for permission</h4>
                    <p className="text-sm text-muted-foreground">
                      You review and approve read-only Gmail access. Google verifies your identity.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">PledgeOS receives a secure token</h4>
                    <p className="text-sm text-muted-foreground">
                      Google issues an OAuth token with read-only Gmail scope. Token is encrypted and stored securely.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Daily processing begins</h4>
                    <p className="text-sm text-muted-foreground">
                      PledgeOS scans recent emails, detects commitments, sends reminders. No human access.
                    </p>
                  </div>
                </li>
              </ol>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">What We Store vs. What We Don't</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-border bg-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  We Store
                </h3>
                <ul className="space-y-3">
                  {[
                    "OAuth access tokens (encrypted)",
                    "Commitment metadata (deadline, status, summary)",
                    "Your email address",
                    "Subscription and billing info",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-8 border-border bg-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-destructive" />
                  We Don't Store
                </h3>
                <ul className="space-y-3">
                  {[
                    "Full email content or body text",
                    "Email attachments",
                    "Your Google password",
                    "Emails from other users",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Data Encryption</h2>
            <Card className="p-8 border-border bg-card">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">In Transit</h4>
                  <p className="text-sm text-muted-foreground">
                    All communication between your browser, PledgeOS servers, and Google APIs uses TLS 1.3 encryption.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">At Rest</h4>
                  <p className="text-sm text-muted-foreground">
                    OAuth tokens and sensitive data are encrypted using AES-256 encryption before database storage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Email content is processed in-memory only. No disk writes. Discarded after analysis completes.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Revoking Access</h2>
            <Card className="p-8 border-border bg-card">
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                You can disconnect PledgeOS from your Gmail account at any time. This immediately revokes all access.
              </p>
              <ol className="space-y-3">
                <li className="text-sm text-muted-foreground">
                  1. Go to{" "}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    myaccount.google.com/permissions
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">2. Find "PledgeOS" in your connected apps</li>
                <li className="text-sm text-muted-foreground">3. Click "Remove Access"</li>
                <li className="text-sm text-muted-foreground">4. PledgeOS can no longer access your Gmail</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-6">
                After revocation, you can request full data deletion by contacting{" "}
                <a href="mailto:privacy@pledgeos.com" className="text-primary hover:underline">
                  privacy@pledgeos.com
                </a>
                .
              </p>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Compliance & Audits</h2>
            <Card className="p-8 border-border bg-card">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Google OAuth Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      PledgeOS follows Google's OAuth 2.0 guidelines and API usage policies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Regular Security Audits</h4>
                    <p className="text-sm text-muted-foreground">
                      Infrastructure and code undergo periodic security reviews and vulnerability scans.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">GDPR & Privacy Laws</h4>
                    <p className="text-sm text-muted-foreground">
                      We comply with international privacy regulations including GDPR and CCPA.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Questions or Concerns?</h2>
            <Card className="p-8 border-border bg-card text-center">
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                If you have security questions or want to report a vulnerability, please contact our security team.
              </p>
              <a
                href="mailto:security@pledgeos.com"
                className="inline-flex items-center justify-center text-base font-medium text-primary hover:underline"
              >
                security@pledgeos.com
              </a>
            </Card>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/50 py-12 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <svg className="h-7 w-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" rx="16" fill="url(#pledgeGradFooter)" />
                <path
                  d="M35 45L45 55L65 35"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="70" r="4" fill="white" />
                <defs>
                  <linearGradient id="pledgeGradFooter" x1="10" y1="10" x2="90" y2="90">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-sm text-muted-foreground">© 2025 PledgeOS</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
              <a
                href="mailto:contact@pledgeos.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
