"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, FileCode2, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface Snippet {
  id: string;
  titleEn: string;
  titleId: string;
  file: string;
  lang: string;
  descriptionEn: string;
  descriptionId: string;
  code: string;
}

const snippets: Snippet[] = [
  {
    id: "core-banking-tx",
    titleEn: "Core Banking ACID Ledger Mutation",
    titleId: "Mutasi Ledger Core Banking (ACID)",
    file: "src/main/java/com/ukabima/banking/service/LedgerMutationService.java",
    lang: "java",
    descriptionEn: "Java 17 & Spring Boot 3.5 transaction pipeline with pessimistic locking to guarantee strict financial balance consistency.",
    descriptionId: "Pipeline transaksi Java 17 & Spring Boot 3.5 dengan pessimistic locking guna menjamin konsistensi saldo perbankan.",
    code: `package com.ukabima.banking.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.time.Instant;

@Service
public class LedgerMutationService {

    private final AccountRepository accountRepo;
    private final MutationAuditLogRepository auditRepo;

    public LedgerMutationService(AccountRepository accountRepo, MutationAuditLogRepository auditRepo) {
        this.accountRepo = accountRepo;
        this.auditRepo = auditRepo;
    }

    @Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
    public MutationResult executeDoubleEntryTransfer(String sourceAccNo, String destAccNo, BigDecimal amount, String refId) {
        // Prevent race-condition with pessimistic row-level locking
        Account source = accountRepo.findByAccountNumberForUpdate(sourceAccNo)
                .orElseThrow(() -> new AccountNotFoundException("Source account invalid: " + sourceAccNo));

        Account dest = accountRepo.findByAccountNumberForUpdate(destAccNo)
                .orElseThrow(() -> new AccountNotFoundException("Destination account invalid: " + destAccNo));

        if (source.getBalance().compareTo(amount) < 0) {
            throw new InsufficientBalanceException("Insufficient ledger funds for transfer");
        }

        source.debit(amount);
        dest.credit(amount);

        accountRepo.save(source);
        accountRepo.save(dest);

        MutationAuditLog log = MutationAuditLog.builder()
                .referenceId(refId)
                .sourceAccount(sourceAccNo)
                .targetAccount(destAccNo)
                .amount(amount)
                .timestamp(Instant.now())
                .status("POSTED_ACID_COMMITTED")
                .build();
        auditRepo.save(log);

        return new MutationResult(true, refId, source.getBalance(), Instant.now());
    }
}`,
  },
  {
    id: "webauthn-security",
    titleEn: "WebAuthn & Spring Security Filter",
    titleId: "Spring Security & Biometrik WebAuthn",
    file: "src/main/java/com/zonakas/security/SecurityConfig.java",
    lang: "java",
    descriptionEn: "Spring Security configuration with WebAuthn Passkeys authentication, JWT token verification, and Bucket4j rate limiting.",
    descriptionId: "Konfigurasi Spring Security dengan autentikasi biometrik WebAuthn Passkeys, validasi JWT, dan rate limiter Bucket4j.",
    code: `package com.zonakas.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtFilter;
    private final RateLimitingFilter rateLimitingFilter;
    private final WebAuthnAssertionService webAuthnService;

    public SecurityConfig(JwtFilter jwt, RateLimit rate, WebAuthn webAuthn) {
        this.jwtFilter = jwt;
        this.rateLimitingFilter = rate;
        this.webAuthnService = webAuthn;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/api/v1/webauthn/**", "/api/v1/webhook/**").permitAll()
                .requestMatchers("/api/v1/banking/**", "/api/v1/mutations/**").hasAuthority("FINANCIAL_ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(rateLimitingFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}`,
  },
  {
    id: "whatsapp-ai-webhook",
    titleEn: "WhatsApp AI Mutation Parser",
    titleId: "Parser AI Mutasi WhatsApp",
    file: "src/main/java/com/zonakas/ai/WhatsAppMutationController.java",
    lang: "java",
    descriptionEn: "NLP parsing engine processing incoming WhatsApp Business API webhooks for automated financial transaction categorization.",
    descriptionId: "Engine NLP memproses webhook WhatsApp Business API untuk pencatatan otomatis transaksi pemasukan dan pengeluaran.",
    code: `package com.zonakas.ai;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/v1/webhook/whatsapp")
public class WhatsAppMutationController {

    private final NLPFinanceClassifier classifier;
    private final TransactionService transactionService;

    @PostMapping(consumes = "application/json")
    public ResponseEntity<WhatsAppResponse> handleIncomingMessage(@RequestBody WhatsAppWebhookPayload payload) {
        String senderPhone = payload.getSender();
        String messageText = payload.getMessage().getText();

        // Parse NLP pattern: e.g. "Beli kopi 25rb" or "Masuk transfer 5.000.000 dari klien"
        ParsedIntent intent = classifier.classifyFinanceIntent(messageText);

        TransactionRecord record = transactionService.recordAutoMutation(
            senderPhone, 
            intent.getType(), 
            intent.getAmount(), 
            intent.getCategory(), 
            intent.getDescription()
        );

        String replyMessage = String.format("✅ Berhasil dicatat: %s Rp %,.0f (%s). Saldo terkini terupdate.",
            intent.getType(), intent.getAmount(), intent.getCategory());

        return ResponseEntity.ok(new WhatsAppResponse(senderPhone, replyMessage));
    }
}`,
  },
];

export function CodeShowcase() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<string>("core-banking-tx");
  const [copied, setCopied] = React.useState<boolean>(false);

  const currentSnippet = snippets.find((s) => s.id === activeTab) || snippets[0];
  const title = language === "id" ? currentSnippet.titleId : currentSnippet.titleEn;
  const description = language === "id" ? currentSnippet.descriptionId : currentSnippet.descriptionEn;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      suppressHydrationWarning
      className="w-full rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs"
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border/80 px-4 py-3 bg-muted/40 gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <FileCode2 size={14} className="text-muted-foreground" />
          <span className="text-[11px] text-foreground font-semibold truncate max-w-[200px] sm:max-w-xs">
            {currentSnippet.file}
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border/70 overflow-x-auto">
          {snippets.map((snip) => {
            const snipTitle = language === "id" ? snip.titleId : snip.titleEn;
            return (
              <button
                key={snip.id}
                onClick={() => setActiveTab(snip.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-sans font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === snip.id
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {snipTitle}
              </button>
            );
          })}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-500" />
              <span className="text-emerald-500 text-[10px]">Copied</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span className="text-[10px] hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Description Banner */}
      <div className="px-4 py-2 bg-muted/20 border-b border-border/40 text-[11px] font-sans text-muted-foreground flex items-center gap-2">
        <Sparkles size={12} className="text-amber-500 shrink-0" />
        <span>{description}</span>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#0d1017] text-[#e6edf3]">
        <AnimatePresence mode="wait">
          <motion.pre
            key={currentSnippet.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-[11px] sm:text-xs leading-relaxed font-mono"
          >
            <code>{currentSnippet.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
}
