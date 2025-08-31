# HLD Interview Approach Checklist

## 🎯 **Step-by-Step HLD Interview Approach**

### **Step 1: Requirements Gathering (5-8 minutes)**

- **Functional Requirements** - Core features and user journeys
- **Non-Functional Requirements** - Scale, performance, availability targets
- **User Base & Traffic** - DAU, peak concurrent users, read/write ratios
- **Data Volume** - Storage requirements, growth projections
- **Geographic Distribution** - Global vs regional deployment needs

### **Step 2: Capacity Estimation (3-5 minutes)**

- **Traffic Calculations** - QPS, peak load, seasonal variations
- **Storage Calculations** - Data size per user, total storage needs
- **Bandwidth Requirements** - Network I/O, CDN requirements
- **Server Estimation** - CPU, memory, disk requirements
- **Database Sizing** - Read/write splits, connection pools

### **Step 3: System APIs Design (5-7 minutes)**

- **Core API Endpoints** - RESTful services with HTTP methods
- **Request/Response Format** - JSON structure, pagination
- **Authentication Strategy** - JWT, OAuth, API keys
- **Rate Limiting** - Per-user, per-endpoint limits
- **API Versioning** - Backward compatibility strategy

### **Step 4: High-Level Architecture (10-15 minutes)**

- **Service Decomposition** - Microservices vs monolith decision
- **Load Balancer Strategy** - L4/L7, geographic distribution
- **Application Layer** - Stateless services, auto-scaling
- **Data Layer** - Database choices, read replicas
- **External Dependencies** - Third-party integrations, CDN

### **Step 5: Database Design (8-12 minutes)**

- **Database Technology Choice** - SQL vs NoSQL vs hybrid
- **Schema Design** - Key tables and relationships
- **Partitioning Strategy** - Horizontal/vertical, sharding keys
- **Replication Setup** - Master-slave, read replicas
- **Consistency Model** - ACID vs eventual consistency

### **Step 6: Detailed Design Deep Dive (8-12 minutes)**

- **Choose Critical Component** - Focus on most complex/important service
- **Internal Architecture** - Service decomposition, design patterns
- **Data Flow** - Request lifecycle, inter-service communication
- **Error Handling** - Retry logic, circuit breakers, fallbacks
- **Performance Optimization** - Caching, async processing

### **Step 7: Scale & Performance (5-8 minutes)**

- **Caching Strategy** - Multi-level caching, cache invalidation
- **Database Optimization** - Indexing, query optimization, connection pooling
- **Horizontal Scaling** - Stateless design, load distribution
- **Performance Monitoring** - Metrics, alerts, SLA tracking
- **Bottleneck Identification** - Single points of failure, performance hotspots

### **Step 8: Advanced Topics (3-5 minutes)**

- **Security Considerations** - Data encryption, secure communication
- **Monitoring & Logging** - Distributed tracing, centralized logging
- **Disaster Recovery** - Backup strategies, failover mechanisms
- **Data Pipeline** - ETL, analytics, real-time processing
- **Future Enhancements** - How to extend for new features

---

## 📋 **Quick Reference HLD Checklist**

### **✅ Must-Have Components in Every HLD:**

- [ ] Load Balancer (with geographic distribution if needed)
- [ ] Application servers (with auto-scaling)
- [ ] Database layer (with read replicas if high read load)
- [ ] Caching layer (Redis/Memcached for hot data)
- [ ] CDN (for static content and global distribution)
- [ ] Message Queue (for asynchronous processing)
- [ ] Monitoring & Alerting system
- [ ] Security layer (authentication, authorization, encryption)

### **✅ Scalability Components:**

- [ ] Horizontal scaling strategy for each tier
- [ ] Database sharding/partitioning approach
- [ ] Caching at multiple levels (browser, CDN, application, database)
- [ ] Asynchronous processing for heavy operations
- [ ] Rate limiting and throttling mechanisms
- [ ] Circuit breakers for external dependencies

### **✅ Reliability Components:**

- [ ] Redundancy and failover mechanisms
- [ ] Health checks and monitoring
- [ ] Backup and disaster recovery
- [ ] Graceful degradation strategies
- [ ] SLA and uptime considerations

### **❌ Common HLD Pitfalls to Avoid:**

- [ ] Don't dive into class-level details (that's LLD)
- [ ] Don't ignore capacity estimation
- [ ] Don't forget about monitoring and observability
- [ ] Don't overlook security considerations
- [ ] Don't create single points of failure
- [ ] Don't ignore data consistency requirements
- [ ] Don't forget about operational concerns (deployment, maintenance)

---

## 🕐 **Time Management Template (45-minute interview)**

| Time      | Activity                  | Focus                                  | Key Deliverables                    |
| --------- | ------------------------- | -------------------------------------- | ----------------------------------- |
| 0-8 min   | Requirements & Estimation | Clarify scope, calculate capacity      | Clear requirements, traffic numbers |
| 8-13 min  | API Design                | Core endpoints and data flow           | REST APIs, authentication strategy  |
| 13-28 min | Architecture Design       | High-level components and connections  | System diagram, technology choices  |
| 28-40 min | Deep Dive                 | Pick one component for detailed design | Internal architecture, data flow    |
| 40-45 min | Scale & Discussion        | Performance, monitoring, alternatives  | Scaling strategy, trade-offs        |

---

## 🎯 **HLD Architecture Components Toolkit**

### **Frontend Tier**

- **Web Application** - React/Angular/Vue SPA
- **Mobile Apps** - Native iOS/Android or React Native
- **CDN** - CloudFlare, AWS CloudFront for static assets
- **API Gateway** - Rate limiting, authentication, routing

### **Application Tier**

- **Load Balancer** - NGINX, HAProxy, AWS ALB/NLB
- **Application Servers** - Node.js, Go, Java microservices
- **Auto Scaling Groups** - Horizontal scaling based on metrics
- **Service Mesh** - Istio, Linkerd for microservice communication

### **Data Tier**

- **Primary Database** - PostgreSQL, MySQL for transactional data
- **Read Replicas** - Scale read operations
- **NoSQL Stores** - MongoDB, DynamoDB for flexible schema
- **Cache Layer** - Redis, Memcached for frequently accessed data
- **Search Engine** - Elasticsearch for full-text search

### **Processing Tier**

- **Message Queues** - RabbitMQ, AWS SQS for async processing
- **Event Streaming** - Apache Kafka for real-time data
- **Background Workers** - Celery, Sidekiq for batch processing
- **Scheduled Jobs** - Cron jobs, AWS EventBridge for periodic tasks

### **External Services**

- **Payment Gateway** - Stripe, PayPal, Razorpay integration
- **Email Service** - SendGrid, AWS SES for notifications
- **SMS Service** - Twilio, AWS SNS for alerts
- **File Storage** - AWS S3, Google Cloud Storage for media

### **Monitoring & Operations**

- **Application Monitoring** - New Relic, DataDog, Prometheus
- **Log Aggregation** - ELK Stack, Splunk, CloudWatch
- **Distributed Tracing** - Jaeger, Zipkin for request tracking
- **Health Checks** - Endpoint monitoring, service discovery

---

## 🎮 **Common HLD Interview Questions Practice List**

### **Social Media & Communication**

- Design Twitter/X - Tweet timeline, followers, trending
- Design Instagram - Photo sharing, stories, recommendations
- Design WhatsApp - Messaging, group chats, media sharing
- Design Discord - Voice/video chat, servers, real-time messaging

### **E-commerce & Marketplace**

- Design Amazon - Product catalog, orders, recommendations
- Design Uber - Ride matching, real-time tracking, payments
- Design Airbnb - Property listings, bookings, reviews
- Design Food Delivery - Restaurant partners, order tracking

### **Content & Streaming**

- Design YouTube - Video upload, streaming, recommendations
- Design Netflix - Content catalog, personalization, CDN
- Design Spotify - Music streaming, playlists, discovery
- Design TikTok - Short videos, algorithm, viral content

### **Productivity & Collaboration**

- Design Google Drive - File storage, sharing, collaboration
- Design Zoom - Video conferencing, screen sharing, recording
- Design Slack - Team messaging, channels, integrations
- Design Notion - Document collaboration, real-time editing

### **Search & Discovery**

- Design Google Search - Web crawling, indexing, ranking
- Design Autocomplete - Search suggestions, typeahead
- Design Recommendation Engine - Collaborative filtering, ML pipeline
- Design News Feed - Content aggregation, personalization

### **Financial & Fintech**

- Design PayPal - Payment processing, wallet, fraud detection
- Design Stock Trading System - Order matching, real-time quotes
- Design Digital Wallet - Balance management, transactions
- Design Banking System - Account management, transactions, security

---

## 💡 **Pro Tips for HLD Success**

### **Before the Interview:**

- Practice drawing system diagrams quickly and clearly
- Memorize capacity estimation formulas and numbers
- Study real system architectures of popular companies
- Practice explaining trade-offs between different approaches

### **During the Interview:**

- Start with simple architecture, then add complexity
- Always justify your technology choices
- Discuss both positive and negative aspects of your design
- Be prepared to handle "what if" scaling scenarios

### **Architecture Drawing Tips:**

- Use standard symbols (rectangles for services, cylinders for databases)
- Show data flow with arrows and labels
- Group related components visually
- Use different colors for different tiers/domains
- Keep it clean and readable

### **Scaling Discussion Framework:**

- **Identify Bottlenecks** - Where will the system break first?
- **Propose Solutions** - Specific strategies to handle each bottleneck
- **Discuss Trade-offs** - Cost, complexity, consistency implications
- **Consider Alternatives** - Different architectural approaches
