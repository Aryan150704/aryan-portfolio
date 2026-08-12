# Aryan Chaudhary — Engineering Portfolio

> A cinematic, interactive portfolio showcasing software engineering projects, backend systems, performance work, research, and professional experience.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Site-caff00?style=for-the-badge&logo=vercel&logoColor=black)](https://aryan150704.github.io/aryan-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Aryan150704-181717?style=for-the-badge&logo=github)](https://github.com/Aryan150704)

---

## Overview

This repository contains the source code for my personal software engineering portfolio.

The goal was not to build another static "developer portfolio", but to create an interactive experience that reflects how I approach engineering:

- Build with clear architectural boundaries
- Measure before optimizing
- Understand the root cause instead of patching symptoms
- Treat performance as an engineering concern
- Ship complete, production-oriented solutions
- Communicate technical decisions clearly

The portfolio combines a minimal dark visual system with interactive motion, engineering case studies, performance metrics, and project architecture.

### Live Website

**[aryan150704.github.io/aryan-portfolio](https://aryan150704.github.io/aryan-portfolio/)**

---

## Featured Engineering Work

### Driftpad

**Next.js 15 · NestJS · GraphQL · Apollo · Prisma · PostgreSQL**

A monorepo blog platform built around a NestJS + Apollo GraphQL backend and Next.js 15 App Router.

The project focused heavily on performance investigation and optimization.

#### Performance

| Metric | Result |
|---|---:|
| Average throughput | ~1,600 req/sec |
| Mean latency | 12 ms |
| P99 latency | 23 ms |
| Comments benchmarked | 7,800+ |
| Comment-fetch latency improvement | **94% reduction** |

#### Engineering Work

- Implemented GraphQL APIs using NestJS and Apollo
- Built frontend flows using Next.js App Router and Server Actions
- Added authentication with JWT and Google OAuth
- Integrated Prisma for database access
- Diagnosed GraphQL throttling issues caused by request-context handling
- Implemented a custom throttling guard
- Investigated database execution plans
- Added targeted indexes based on measured query behavior
- Eliminated unnecessary full-table sorting
- Load tested the API using `autocannon`

The project is presented in the portfolio as an engineering case study rather than simply a feature list.

---

### TaskFlow

**Java · Spring Boot · Spring Security · Hibernate/JPA · PostgreSQL**

A production-oriented task management backend designed around clean API boundaries and role-based access control.

#### Highlights

- JWT-based authentication
- Role-based authorization
- Owner / Admin / Member permission model
- 15+ RESTful endpoints
- Spring MVC architecture
- Hibernate/JPA persistence
- PostgreSQL database
- Query optimization using `JOIN FETCH`
- Production deployment using Railway

#### Architecture

```text
Client
   │
   ▼
Spring Security
   │
   ▼
REST Controllers
   │
   ▼
Service Layer
   │
   ▼
Repository / JPA
   │
   ▼
PostgreSQL
