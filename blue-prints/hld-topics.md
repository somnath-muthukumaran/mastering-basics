# HLD Topics & Components You Must Know

## 🏗️ **Core System Architecture Components**

### **Load Balancing**

- Layer 4 vs Layer 7 Load Balancers
- Round Robin, Weighted Round Robin, Least Connections
- Health Checks and Failover Mechanisms
- Geographic Load Balancing
- Session Persistence (Sticky Sessions)

### **Web Servers & Application Servers**

- Reverse Proxy vs Forward Proxy
- Web Server (NGINX, Apache) vs App Server (Tomcat, Node.js)
- Stateless vs Stateful Application Design
- Auto Scaling (Horizontal vs Vertical)
- Container Orchestration (Kubernetes, Docker Swarm)

### **API Gateway**

- Request Routing and Protocol Translation
- Rate Limiting and Throttling
- Authentication and Authorization
- Request/Response Transformation
- API Versioning and Backward Compatibility

---

## 💾 **Data Storage & Management**

### **Relational Databases**

- ACID Properties and Transaction Management
- Master-Slave Replication
- Database Sharding (Horizontal Partitioning)
- Read Replicas and Write Scaling
- Connection Pooling and Query Optimization

### **NoSQL Databases**

- Document Stores (MongoDB, CouchDB)
- Key-Value Stores (Redis, DynamoDB)
- Column-Family (Cassandra, HBase)
- Graph Databases (Neo4j, Amazon Neptune)
- CAP Theorem and Consistency Models

### **Data Warehousing & Analytics**

- OLTP vs OLAP Systems
- Data Lakes vs Data Warehouses
- ETL/ELT Pipelines
- Real-time Analytics (Stream Processing)
- Data Partitioning and Bucketing

### **File Storage Systems**

- Object Storage (S3, Google Cloud Storage)
- Block Storage vs File Storage
- Content Delivery Networks (CDN)
- Distributed File Systems (HDFS, GFS)
- Data Replication and Consistency

---

## ⚡ **Caching Strategies**

### **Cache Types & Levels**

- Browser Cache, CDN Cache, Reverse Proxy Cache
- Application-Level Cache (In-Memory)
- Database Cache (Query Result Cache)
- Distributed Cache (Redis Cluster, Memcached)

### **Cache Patterns**

- Cache-Aside (Lazy Loading)
- Write-Through Cache
- Write-Behind (Write-Back) Cache
- Refresh-Ahead Cache

### **Cache Considerations**

- Cache Invalidation Strategies
- Cache Consistency and Coherence
- Cache Warming and Preloading
- Cache Eviction Policies (LRU, LFU, FIFO)

---

## 🔄 **Message Queues & Event Processing**

### **Message Queue Systems**

- Point-to-Point Queues (AWS SQS, RabbitMQ)
- Publish-Subscribe Systems (Apache Kafka, Redis Pub/Sub)
- Message Brokers vs Event Streaming
- Dead Letter Queues and Error Handling

### **Event-Driven Architecture**

- Event Sourcing and CQRS
- Saga Pattern for Distributed Transactions
- Event Store and Event Replay
- Eventual Consistency Management

### **Stream Processing**

- Real-time vs Batch Processing
- Apache Kafka, Apache Pulsar
- Stream Processing Frameworks (Apache Storm, Apache Flink)
- Windowing and Aggregation Strategies

---

## 🌐 **Network & Communication**

### **Communication Protocols**

- HTTP/HTTPS and HTTP/2, HTTP/3
- WebSocket for Real-time Communication
- gRPC for Internal Service Communication
- TCP vs UDP Trade-offs

### **Service Communication**

- Synchronous vs Asynchronous Communication
- REST vs GraphQL vs gRPC
- Service Discovery (Consul, Eureka, Kubernetes DNS)
- Circuit Breaker Pattern (Hystrix, Resilience4j)

### **Content Delivery**

- CDN Architecture and Edge Caching
- Geographic Distribution Strategies
- Static vs Dynamic Content Delivery
- Image and Video Optimization

---

## 🔒 **Security & Reliability**

### **Security Components**

- Authentication (JWT, OAuth 2.0, SAML)
- Authorization (RBAC, ABAC, Policy-Based)
- Data Encryption (At Rest and In Transit)
- API Security (Rate Limiting, Input Validation)
- DDoS Protection and Web Application Firewall

### **Reliability Patterns**

- Circuit Breaker for External Dependencies
- Bulkhead Pattern for Resource Isolation
- Timeout and Retry Mechanisms
- Graceful Degradation Strategies
- Chaos Engineering and Fault Injection

### **Monitoring & Observability**

- Application Performance Monitoring (APM)
- Distributed Tracing (Jaeger, Zipkin)
- Centralized Logging (ELK Stack, Splunk)
- Metrics and Alerting (Prometheus, Grafana)
- Health Checks and Service Status

---

## 📈 **Scalability Patterns**

### **Horizontal Scaling**

- Stateless Application Design
- Database Sharding Strategies
- Microservices Architecture
- Container Orchestration
- Auto Scaling Policies

### **Performance Optimization**

- Database Indexing and Query Optimization
- Connection Pooling and Resource Management
- Lazy Loading and Pagination
- Compression and Minification
- Batch Processing for Heavy Operations

### **Global Scale Considerations**

- Multi-Region Deployment
- Data Locality and Latency Optimization
- Cross-Region Replication
- Disaster Recovery and Backup Strategies
- Compliance and Data Residency

---

## 🎯 **System Design Patterns**

### **Architectural Patterns**

- Monolithic vs Microservices Architecture
- Service-Oriented Architecture (SOA)
- Event-Driven Architecture
- Serverless Architecture (Functions as a Service)
- Domain-Driven Design (DDD)

### **Data Management Patterns**

- Database per Service (Microservices)
- Shared Database Anti-pattern
- CQRS (Command Query Responsibility Segregation)
- Event Sourcing
- Polyglot Persistence

### **Integration Patterns**

- API Gateway Pattern
- Backend for Frontend (BFF)
- Strangler Fig Pattern (Legacy Migration)
- Bulkhead Pattern
- Ambassador Pattern

---

## 🔧 **Technology Stack Components**

### **Frontend Technologies**

- Single Page Applications (React, Vue, Angular)
- Server-Side Rendering (Next.js, Nuxt.js)
- Progressive Web Apps (PWA)
- Mobile Development (React Native, Flutter)

### **Backend Technologies**

- Application Frameworks (Spring Boot, Express.js, Django)
- Runtime Environments (JVM, Node.js, .NET Core)
- Containerization (Docker, Kubernetes)
- Serverless Platforms (AWS Lambda, Google Cloud Functions)

### **Database Technologies**

- Relational (PostgreSQL, MySQL, Oracle)
- Document (MongoDB, CouchDB)
- Key-Value (Redis, DynamoDB)
- Graph (Neo4j, Amazon Neptune)
- Time-Series (InfluxDB, TimescaleDB)

### **Infrastructure & DevOps**

- Cloud Platforms (AWS, Google Cloud, Azure)
- Infrastructure as Code (Terraform, CloudFormation)
- CI/CD Pipelines (Jenkins, GitLab CI, GitHub Actions)
- Monitoring Tools (Prometheus, Grafana, New Relic)

---

## 📊 **Performance & Capacity Planning**

### **Capacity Estimation Techniques**

- Back-of-the-Envelope Calculations
- Traffic Pattern Analysis
- Storage Requirement Calculations
- Bandwidth and Network Planning
- Cost Estimation and Optimization

### **Performance Metrics**

- Latency (P50, P95, P99 percentiles)
- Throughput (Requests per Second, Transactions per Second)
- Availability (Uptime, SLA targets)
- Consistency (Strong vs Eventual)
- Durability (Data Loss Prevention)

### **Bottleneck Identification**

- CPU-Bound vs I/O-Bound Operations
- Memory Limitations and Optimization
- Network Bandwidth Constraints
- Database Performance Bottlenecks
- Third-Party Service Dependencies

---

## 🚀 **Advanced Topics**

### **Distributed Systems Concepts**

- Consistency, Availability, Partition Tolerance (CAP Theorem)
- Eventual Consistency and BASE Properties
- Distributed Consensus (Raft, Paxos)
- Vector Clocks and Logical Timestamps
- Byzantine Fault Tolerance

### **Real-Time Systems**

- WebSocket and Server-Sent Events
- Real-Time Databases (Firebase, Socket.io)
- Live Data Synchronization
- Conflict Resolution in Collaborative Editing
- Real-Time Analytics and Stream Processing

### **Machine Learning Integration**

- ML Model Serving and Inference
- A/B Testing Frameworks
- Recommendation Systems Architecture
- Real-Time Personalization
- Feature Stores and ML Pipelines

### **Search & Discovery**

- Full-Text Search Engines (Elasticsearch, Solr)
- Search Indexing and Ranking Algorithms
- Autocomplete and Typeahead Systems
- Faceted Search and Filtering
- Search Analytics and Optimization

---

## 🎯 **Industry-Specific Components**

### **E-commerce Specific**

- Product Catalog Management
- Inventory Management Systems
- Order Processing Pipelines
- Payment Gateway Integration
- Recommendation Engines

### **Social Media Specific**

- News Feed Generation Algorithms
- Content Moderation Systems
- Real-Time Notification Systems
- Social Graph Management
- Media Processing Pipelines

### **Gaming Specific**

- Real-Time Multiplayer Architecture
- Game State Synchronization
- Leaderboards and Matchmaking
- In-Game Economy Systems
- Cheat Detection and Prevention

### **Financial Services Specific**

- High-Frequency Trading Systems
- Risk Management Systems
- Fraud Detection Pipelines
- Regulatory Compliance Systems
- Audit Trail and Logging

---

## 📚 **Essential Knowledge Areas**

### **Networking Fundamentals**

- TCP/IP, HTTP/HTTPS Protocol Stack
- DNS Resolution and Load Balancing
- Network Latency and Bandwidth Optimization
- WebSocket vs HTTP Polling vs Server-Sent Events

### **Operating System Concepts**

- Process vs Thread Management
- Memory Management and Virtual Memory
- File Systems and I/O Optimization
- Network Socket Programming

### **Cloud Computing Concepts**

- Infrastructure as a Service (IaaS)
- Platform as a Service (PaaS)
- Function as a Service (FaaS)
- Multi-Cloud and Hybrid Cloud Strategies

### **Data Engineering**

- Data Pipeline Architecture
- Batch vs Stream Processing
- Data Quality and Validation
- Data Lineage and Governance
