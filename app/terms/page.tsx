import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: December 25, 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              By accessing and using PledgeOS, you agree to be bound by these Terms of Service. If you do not agree to
              these terms, do not use the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS is a commitment tracking and reminder system that analyzes Gmail messages to detect promises,
              commitments, and requests, then sends daily email summaries. The service is provided "as is" without
              guarantees of task completion or fulfillment.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <strong>PledgeOS is a reminder tool, not a guarantee system.</strong> You remain solely responsible for
              fulfilling your commitments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Provide accurate account information</li>
              <li>Maintain the security of your Google account credentials</li>
              <li>Use PledgeOS only for lawful purposes</li>
              <li>Not attempt to reverse engineer, hack, or compromise the service</li>
              <li>Not share your account with others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Subscription and Billing</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS is a paid subscription service. By subscribing, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Pay the monthly subscription fee via Stripe</li>
              <li>Automatic renewal unless you cancel</li>
              <li>No refunds for partial months</li>
              <li>Price changes with 30 days notice</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing
              period.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Gmail Access and OAuth</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS requires read-only access to your Gmail via Google OAuth. By granting access, you acknowledge
              that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>PledgeOS can read your email messages and metadata</li>
              <li>You can revoke access at any time via your Google Account settings</li>
              <li>Revoking access will disable PledgeOS functionality</li>
              <li>We do not permanently store email content (see Privacy Policy)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <strong>PledgeOS is a reminder tool, not a guarantee of performance.</strong> To the fullest extent
              permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>We are not liable for missed commitments or business consequences</li>
              <li>We do not guarantee 100% detection accuracy</li>
              <li>We are not responsible for email delivery failures</li>
              <li>Maximum liability is limited to your paid subscription fees</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Use PledgeOS as a supplementary tool. You remain responsible for tracking and fulfilling your commitments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Availability</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We strive for high uptime but do not guarantee uninterrupted service. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Perform scheduled maintenance with advance notice</li>
              <li>Temporarily suspend service for technical issues</li>
              <li>Modify features and functionality</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Account Termination</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We reserve the right to terminate accounts that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Violate these Terms of Service</li>
              <li>Engage in abusive or fraudulent behavior</li>
              <li>Attempt to compromise service security</li>
              <li>Fail to pay subscription fees</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Upon termination, your access will be revoked and data deleted per our retention policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              All PledgeOS code, algorithms, design, and branding are owned by PledgeOS. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
              <li>Copy, modify, or reverse engineer the service</li>
              <li>Use our branding without permission</li>
              <li>Create derivative works or competing services based on PledgeOS</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              PledgeOS is provided "as is" and "as available" without warranties of any kind, express or implied. We
              disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We may update these Terms of Service at any time. Material changes will be communicated via email.
              Continued use after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              These Terms are governed by the laws of the United States. Disputes will be resolved through binding
              arbitration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms, contact:
            </p>
            <p className="text-base text-foreground">
              <a href="mailto:legal@pledgeos.com" className="text-primary hover:underline">
                legal@pledgeos.com
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
