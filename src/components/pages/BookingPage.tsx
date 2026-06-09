"use client";

import React from "react";
import { Card, Field, Input, Textarea, Checkbox, Button } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, PageHeader, FormSuccess } from "@/components/site/Shared";
import { type Dict } from "@/content/content";

export function BookingPage({ t }: { t: Dict }) {
  const b = t.booking;
  const [sent, setSent] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  return (
    <div>
      <PageHeader eyebrow={b.eyebrow} title={b.title} lead={b.intro} />
      <Section>
        <div className="booking-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", alignItems: "start" }}>
          {/* Scheduler placeholder */}
          <Card padding="lg" style={{ minHeight: 380, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "var(--space-4)" }}>
              <span style={{ color: "var(--sage-600)" }}>{Icons.calendar({ size: 22 })}</span>
              <h2 style={{ fontSize: "var(--text-lg)", margin: 0 }}>{b.schedulerLabel}</h2>
            </div>
            <div
              style={{
                flex: 1,
                border: "1.5px dashed var(--border-strong)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "var(--space-6)",
                color: "var(--text-faint)",
                background: "var(--surface-sunken)",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>{b.schedulerNote}</span>
            </div>
          </Card>
          {/* Request form */}
          <Card padding="lg" elevation="raised">
            {sent ? (
              <FormSuccess title={t.contact.successTitle} body={t.contact.successBody} />
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
              >
                <h2 style={{ fontSize: "var(--text-lg)", margin: 0 }}>{b.formTitle}</h2>
                <Field label={b.fields.name} htmlFor="b-name" required>
                  <Input id="b-name" />
                </Field>
                <Field label={b.fields.email} htmlFor="b-email" required>
                  <Input id="b-email" type="email" iconLeft={Icons.mail({ size: 18 })} placeholder="name@example.com" />
                </Field>
                <Field label={b.fields.times} htmlFor="b-times">
                  <Input id="b-times" placeholder={b.timesPlaceholder} />
                </Field>
                <Field label={b.fields.message} htmlFor="b-msg">
                  <Textarea id="b-msg" rows={3} />
                </Field>
                <Checkbox checked={consent} onChange={() => setConsent(!consent)}>
                  {b.consent}
                </Checkbox>
                <Button type="submit" variant="primary" size="lg" disabled={!consent} iconRight={Icons.arrowRight({ size: 18 })}>
                  {b.submit}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </div>
  );
}
