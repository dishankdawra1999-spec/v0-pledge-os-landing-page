import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: December 25, 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS is an accountability system that analyzes your Gmail to detect commitments and send daily
              reminders. We take your privacy seriously and are committed to transparent data practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Data We Access</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS uses Google OAuth to access your Gmail with read-only permissions. Specifically, we access:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Email subject lines and body content</li>
              <li>Email metadata (sender, recipient, timestamp)</li>
              <li>Thread context for commitment tracking</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Data</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">Your email data is processed to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Detect promises, commitments, and requests using natural language processing</li>
              <li>Extract implied deadlines and track fulfillment status</li>
              <li>Generate daily reminder emails summarizing unresolved commitments</li>
              <li>Improve our detection algorithms (aggregated and anonymized only)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Storage</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <strong>We do not permanently store your emails.</strong> Email content is processed in real-time and
              discarded. We only store:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>OAuth tokens (securely encrypted)</li>
              <li>Extracted commitment metadata (summary, deadline, status)</li>
              <li>Your account email address</li>
              <li>Subscription and billing information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>All data transmission uses TLS encryption</li>
              <li>OAuth tokens are encrypted at rest</li>
              <li>No human access to your email content</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS uses the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>
                <strong>Google OAuth:</strong> For secure Gmail authentication
              </li>
              <li>
                <strong>Stripe:</strong> For payment processing (PCI-compliant)
              </li>
              <li>
                <strong>Cloud hosting providers:</strong> For application infrastructure
              </li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              These services have their own privacy policies and security standards that we carefully vet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <strong>We never sell your data.</strong> We do not share your personal information with third parties
              except:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>When required by law or legal process</li>
              <li>To protect our rights or the safety of others</li>
              <li>With service providers under strict confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Revoke PledgeOS access to your Gmail at any time via your Google Account settings</li>
              <li>Request deletion of your data by contacting support</li>
              <li>Export your commitment data</li>
              <li>Cancel your subscription at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS is not intended for users under 18 years of age. We do not knowingly collect data from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy periodically. Material changes will be communicated via email. Continued
              use of PledgeOS after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              For privacy questions or data requests, contact us at:
            </p>
            <p className="text-base text-foreground">
              <a href="mailto:privacy@pledgeos.com" className="text-primary hover:underline">
                privacy@pledgeos.com
              </a>
            </p>
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
