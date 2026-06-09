"use client";

import React from "react";
import { Card, Field, Input, Textarea, Checkbox, Button } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, PageHeader, SafetyNote, FormSuccess } from "@/components/site/Shared";
import { type Dict } from "@/content/content";

export function ContactPage({ t }: { t: Dict }) {
  const c = t.contact;
  const [email, setEmail] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const emailErr = touched && email.length > 0 && !emailValid;
  const consentErr = touched && !consent;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (emailValid && consent) setSent(true);
  };

  return (
    <div>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <Section>
        <div style={{ marginBottom: "var(--space-6)" }}>
          <SafetyNote>{c.notice}</SafetyNote>
        </div>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-8)", alignItems: "start" }}>
          <Card padding="lg" elevation="raised">
            {sent ? (
              <FormSuccess title={c.successTitle} body={c.successBody} />
            ) : (
              <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <div className="form-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                  <Field label={c.fields.name} htmlFor="c-name" required>
                    <Input id="c-name" />
                  </Field>
                  <Field label={c.fields.phone} htmlFor="c-phone">
                    <Input id="c-phone" type="tel" iconLeft={Icons.phone({ size: 17 })} />
                  </Field>
                </div>
                <Field label={c.fields.email} htmlFor="c-email" required error={emailErr ? c.errEmail : undefined}>
                  <Input
                    id="c-email"
                    type="email"
                    value={email}
                    invalid={emailErr}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    iconLeft={Icons.mail({ size: 18 })}
                    placeholder="name@example.com"
                  />
                </Field>
                <Field label={c.fields.message} htmlFor="c-msg" required>
                  <Textarea id="c-msg" rows={4} />
                </Field>
                <Field error={consentErr ? c.errConsent : undefined}>
                  <Checkbox checked={consent} onChange={() => setConsent(!consent)}>
                    {c.consent}
                  </Checkbox>
                </Field>
                <div>
                  <Button type="submit" variant="primary" size="lg" iconRight={Icons.arrowRight({ size: 18 })}>
                    {c.submit}
                  </Button>
                </div>
              </form>
            )}
          </Card>
          <div>
            <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-4)" }}>{c.sideTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {c.side.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-body)", fontSize: "var(--text-sm)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "var(--radius-round)", background: "var(--sage-100)", color: "var(--sage-700)", flex: "0 0 auto" }}>
                    {Icons[s.icon]?.({ size: 19 })}
                  </span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
