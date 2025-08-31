# Complete LLD Interview Components Checklist

## 🎯 **Core LLD Interview Components**

### **1. Object-Oriented Design Principles**

- **SOLID Principles**
  - Single Responsibility Principle (SRP)
  - Open/Closed Principle (OCP)
  - Liskov Substitution Principle (LSP)
  - Interface Segregation Principle (ISP)
  - Dependency Inversion Principle (DIP)
- **Encapsulation, Inheritance, Polymorphism**
- **Composition vs Inheritance**
- **Abstract Classes vs Interfaces**

### **2. Design Patterns (Gang of Four + Modern)**

#### **Creational Patterns**

- Factory Method Pattern
- Abstract Factory Pattern
- Builder Pattern
- Singleton Pattern (and its problems)
- Prototype Pattern

#### **Structural Patterns**

- Adapter Pattern
- Decorator Pattern
- Facade Pattern
- Composite Pattern
- Proxy Pattern
- Bridge Pattern

#### **Behavioral Patterns**

- Observer Pattern
- Strategy Pattern
- Command Pattern
- State Pattern
- Template Method Pattern
- Chain of Responsibility
- Mediator Pattern
- Visitor Pattern

#### **Modern Patterns**

- Dependency Injection
- Repository Pattern
- MVC/MVP/MVVM
- Publisher-Subscriber
- Event Sourcing
- CQRS (Command Query Responsibility Segregation)

### **3. Class Relationships & UML**

- **Association** (uses-a)
- **Aggregation** (has-a)
- **Composition** (part-of)
- **Inheritance** (is-a)
- **Dependency** (depends-on)
- **Multiplicity** (1:1, 1:N, N:M)

### **4. API Design & Interface Definition**

- **RESTful API Design**
  - HTTP Methods (GET, POST, PUT, DELETE, PATCH)
  - Status Codes (200, 201, 400, 404, 500)
  - Resource Naming Conventions
  - Request/Response Body Design
- **GraphQL API Design**
- **RPC/gRPC Interface Design**
- **WebSocket API for Real-time Features**

### **5. Database Schema Design**

- **Relational Database Design**
  - Primary Keys and Foreign Keys
  - Normalization (1NF, 2NF, 3NF, BCNF)
  - Denormalization Strategies
  - Index Design and Optimization
- **NoSQL Schema Patterns**
  - Document Store Design (MongoDB)
  - Key-Value Design (Redis, DynamoDB)
  - Column Family (Cassandra)
  - Graph Database (Neo4j)

### **6. Error Handling & Exception Management**

- **Exception Hierarchy Design**
- **Custom Exception Classes**
- **Error Propagation Strategies**
- **Graceful Degradation**
- **Retry Mechanisms**
- **Circuit Breaker Pattern**

### **7. Validation & Business Rules**

- **Input Validation**
- **Business Logic Validation**
- **Data Integrity Constraints**
- **Authorization Rules**
- **Workflow Validation**

### **8. Caching Strategies**

- **Cache-Aside Pattern**
- **Write-Through Caching**
- **Write-Behind Caching**
- **Cache Invalidation Strategies**
- **Multi-Level Caching**
- **Cache Consistency**

### **9. State Management**

- **Stateless vs Stateful Design**
- **State Machines**
- **Event-Driven State Changes**
- **Persistence Strategies**
- **Session Management**

### **10. Security Design Components**

- **Authentication Mechanisms**
  - JWT Token Design
  - OAuth 2.0 Flow
  - Session-based Authentication
  - Multi-Factor Authentication
- **Authorization Models**
  - Role-Based Access Control (RBAC)
  - Attribute-Based Access Control (ABAC)
  - Permission Systems
- **Data Security**
  - Encryption at Rest and in Transit
  - Password Hashing (bcrypt, Argon2)
  - Input Sanitization
  - SQL Injection Prevention

---

## 🎯 **Common LLD Interview Systems & Their Key Components**

### **1. E-commerce System**

**Key Components:**

- User Management (Registration, Authentication, Profile)
- Product Catalog (Categories, Search, Recommendations)
- Shopping Cart (Add/Remove, Persistence, Validation)
- Order Management (Placement, Status Tracking, History)
- Payment Processing (Multiple gateways, Transaction handling)
- Inventory Management (Stock tracking, Reservations)
- Notification System (Email, SMS, Push notifications)

### **2. Chat Application**

**Key Components:**

- User Management (Online status, Friend lists)
- Message Handling (Send, Receive, Delivery status)
- Chat Rooms/Groups (Create, Join, Leave, Admin)
- Real-time Communication (WebSocket, Message queuing)
- Media Sharing (File upload, Image sharing)
- Message Storage (History, Search, Archival)
- Notification System (Push, Sound, Badge counts)

### **3. Parking Lot System**

**Key Components:**

- Parking Infrastructure (Lots, Floors, Spots)
- Vehicle Management (Types, License plates)
- Reservation System (Booking, Cancellation)
- Payment System (Hourly rates, Validation)
- Access Control (Entry/Exit gates, Security)
- Monitoring System (Occupancy, Analytics)

### **4. Library Management System**

**Key Components:**

- Book Catalog (Search, Categories, Authors)
- Member Management (Registration, Membership types)
- Borrowing System (Issue, Return, Renewals)
- Fine Management (Late fees, Payment tracking)
- Reservation System (Hold requests, Queue management)
- Inventory Tracking (Availability, Multiple copies)

### **5. Ride Sharing Service (Uber-like)**

**Key Components:**

- User Management (Riders, Drivers, Admin)
- Trip Management (Request, Matching, Tracking)
- Location Services (GPS tracking, Route optimization)
- Pricing Engine (Surge pricing, Distance calculation)
- Payment System (Multiple methods, Split payments)
- Rating System (Driver/Rider ratings, Feedback)
- Notification System (Trip updates, Promotions)

### **6. Hotel Booking System**

**Key Components:**

- Hotel Management (Properties, Rooms, Amenities)
- Booking Engine (Search, Availability, Reservations)
- User Management (Guests, Hotel staff, Admin)
- Payment Processing (Booking, Cancellation policies)
- Inventory Management (Room availability, Overbooking)
- Review System (Ratings, Comments, Moderation)

### **7. Social Media Platform**

**Key Components:**

- User Management (Profiles, Friends, Followers)
- Content Management (Posts, Comments, Media)
- Feed Generation (Timeline, Recommendations)
- Interaction System (Likes, Shares, Comments)
- Messaging System (DMs, Group chats)
- Notification Engine (Activity feeds, Push notifications)
- Privacy Controls (Visibility, Blocking, Reporting)

### **8. Movie Ticket Booking**

**Key Components:**

- Theater Management (Locations, Screens, Seats)
- Movie Catalog (Listings, Showtimes, Ratings)
- Booking Engine (Seat selection, Reservation)
- User Management (Accounts, Booking history)
- Payment System (Multiple methods, Refunds)
- Notification System (Booking confirmations, Reminders)

---

## 🛠️ **Essential LLD Design Techniques**

### **1. Entity Modeling Approach**

- Identify all **nouns** in requirements as potential entities
- Define **relationships** between entities
- Determine **cardinality** (1:1, 1:N, N:M)
- Design **inheritance hierarchies** where applicable

### **2. Behavior Modeling**

- Identify all **verbs** in requirements as methods/operations
- Group related behaviors into **service classes**
- Define **workflows** and **state transitions**
- Handle **edge cases** and **error scenarios**

### **3. Data Access Layer Design**

- **Repository Pattern** for data access
- **DAO (Data Access Object)** pattern
- **Unit of Work** pattern for transactions
- **Specification Pattern** for complex queries

### **4. Service Layer Architecture**

- **Business Logic Services** (UserService, OrderService)
- **Application Services** (orchestration layer)
- **Domain Services** (complex business rules)
- **Infrastructure Services** (email, notifications)

### **5. Controller/Presentation Layer**

- **Request/Response DTOs**
- **Input Validation**
- **Exception Handling**
- **API Versioning**

---

## 📊 **Database Schema Design Components**

### **1. Table Design Principles**

- **Primary Key Strategy** (UUID, Auto-increment, Composite)
- **Foreign Key Relationships**
- **Index Strategy** (Single column, Composite, Partial)
- **Constraint Management** (NOT NULL, UNIQUE, CHECK)

### **2. Common Schema Patterns**

```sql
-- User Management Schema
CREATE TABLE users (
    user_id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    status ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
);

-- Address Management (Reusable Pattern)
CREATE TABLE addresses (
    address_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    address_type ENUM('BILLING', 'SHIPPING', 'HOME', 'WORK'),
    street_line1 VARCHAR(255) NOT NULL,
    street_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    INDEX idx_user_type (user_id, address_type)
);

-- Audit Trail (Common Pattern)
CREATE TABLE audit_logs (
    log_id VARCHAR(36) PRIMARY KEY,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(36) NOT NULL,
    action ENUM('CREATE', 'UPDATE', 'DELETE'),
    old_values JSON,
    new_values JSON,
    performed_by VARCHAR(36),
    performed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_entity (entity_type, entity_id),
    INDEX idx_performer (performed_by),
    INDEX idx_timestamp (performed_at)
);
```

---

## 🔒 **2. Security Components**

### **Entities Identification**

```
Core Entities:
├── User/Principal
├── Role
├── Permission
├── Session
├── AccessToken
├── RefreshToken
├── SecurityContext
├── AuditLog
└── SecurityPolicy
```

### **Entity Relationships**

```
User (N) ──── (N) Role [many-to-many]
Role (N) ──── (N) Permission [many-to-many]
User (1) ──── (N) Session
Session (1) ──── (1) AccessToken
User (1) ──── (N) RefreshToken
User (1) ──── (N) AuditLog
```

### **Class Design & Schema**

```java
// Authentication & Authorization
class SecurityContext {
    private String contextId;
    private User currentUser;
    private Set<Role> roles;
    private Set<Permission> permissions;
    private String sessionId;
    private long expirationTime;

    public boolean hasPermission(String resource, String action);
    public boolean hasRole(String roleName);
    public void invalidate();
}

class AccessToken {
    private String tokenId;
    private String userId;
    private TokenType type; // BEARER, JWT, API_KEY
    private String tokenValue;
    private long issuedAt;
    private long expiresAt;
    private Set<String> scopes;
    private TokenStatus status; // ACTIVE, EXPIRED, REVOKED

    public boolean isValid();
    public void revoke();
}

class Permission {
    private String permissionId;
    private String resource; // USER, ORDER, PRODUCT
    private String action; // CREATE, READ, UPDATE, DELETE
    private String condition; // Optional: age > 18, department = 'IT'

    public boolean evaluate(SecurityContext context, Object targetObject);
}
```

### **Security Schema**

```sql
-- Role-Based Access Control
CREATE TABLE roles (
    role_id VARCHAR(36) PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE permissions (
    permission_id VARCHAR(36) PRIMARY KEY,
    resource VARCHAR(50) NOT NULL,
    action VARCHAR(50) NOT NULL,
    condition_expression TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY unique_resource_action (resource, action)
);

CREATE TABLE user_roles (
    user_id VARCHAR(36),
    role_id VARCHAR(36),
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assigned_by VARCHAR(36),

    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE
);

CREATE TABLE sessions (
    session_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    INDEX idx_user_active (user_id, is_active),
    INDEX idx_expiry (expires_at)
);
```

---

## 🌐 **3. Network & Communication Components**

### **Entities Identification**

```
Core Entities:
├── Connection
├── Socket
├── Protocol
├── Message
├── MessageQueue
├── Channel
├── NetworkInterface
├── Endpoint
└── ConnectionPool
```

### **Class Design**

```java
class Connection {
    private String connectionId;
    private SocketAddress localAddress;
    private SocketAddress remoteAddress;
    private ConnectionState state; // CONNECTING, CONNECTED, DISCONNECTED
    private Protocol protocol; // HTTP, HTTPS, WebSocket, TCP, UDP
    private long establishedAt;
    private long lastActivityAt;
    private Map<String, Object> attributes;

    public void send(Message message);
    public Message receive();
    public void close();
}

class Message {
    private String messageId;
    private MessageType type; // REQUEST, RESPONSE, NOTIFICATION
    private Map<String, String> headers;
    private byte[] payload;
    private String contentType;
    private long timestamp;
    private MessagePriority priority;

    public void serialize();
    public static Message deserialize(byte[] data);
}

class ConnectionPool {
    private String poolId;
    private String targetHost;
    private int targetPort;
    private int maxConnections;
    private int minConnections;
    private Queue<Connection> availableConnections;
    private Set<Connection> activeConnections;
    private long connectionTimeout;

    public Connection borrowConnection();
    public void returnConnection(Connection conn);
}
```

---

## 💾 **4. Data Management Components**

### **Entities Identification**

```
Core Entities:
├── DataSource
├── Transaction
├── ConnectionManager
├── QueryBuilder
├── ResultSet
├── DataMapper
├── Cache
├── Repository
└── UnitOfWork
```

### **Class Design**

```java
class Repository<T> {
    private String repositoryId;
    private Class<T> entityType;
    private DataSource dataSource;
    private Cache cache;

    public T findById(String id);
    public List<T> findBySpecification(Specification<T> spec);
    public T save(T entity);
    public void delete(String id);
    public Page<T> findAll(Pageable pageable);
}

class Transaction {
    private String transactionId;
    private TransactionStatus status; // ACTIVE, COMMITTED, ROLLED_BACK
    private IsolationLevel isolationLevel;
    private long startTime;
    private long timeoutMs;
    private List<TransactionResource> resources;

    public void commit();
    public void rollback();
    public void setRollbackOnly();
}

class Cache {
    private String cacheId;
    private CacheStrategy strategy; // LRU, LFU, FIFO
    private long maxSize;
    private long ttlMs;
    private Map<String, CacheEntry> entries;

    public Object get(String key);
    public void put(String key, Object value);
    public void invalidate(String key);
    public void clear();
}
```

---

## 🎮 **5. Event-Driven Components**

### **Entities Identification**

```
Core Entities:
├── Event
├── EventPublisher
├── EventSubscriber
├── EventBus
├── EventStore
├── EventHandler
├── Saga
└── EventStream
```

### **Class Design**

```java
class Event {
    private String eventId;
    private String eventType;
    private String aggregateId;
    private long version;
    private Object payload;
    private long timestamp;
    private String correlationId;

    public static Event create(String type, Object payload);
}

class EventBus {
    private String busId;
    private Map<String, List<EventHandler>> handlers;
    private EventStore eventStore;
    private MessageQueue messageQueue;

    public void publish(Event event);
    public void subscribe(String eventType, EventHandler handler);
    public void unsubscribe(String eventType, EventHandler handler);
}

class EventHandler {
    private String handlerId;
    private String eventType;
    private HandlerPriority priority;
    private boolean isAsync;

    public void handle(Event event);
    public boolean canHandle(Event event);
}
```

---

## 🔄 **6. Workflow & State Management Components**

### **Entities Identification**

```
Core Entities:
├── Workflow
├── WorkflowState
├── StateTransition
├── WorkflowEngine
├── Task
├── ActivityLog
└── ApprovalChain
```

### **Class Design**

```java
class Workflow {
    private String workflowId;
    private String name;
    private WorkflowState currentState;
    private List<WorkflowState> states;
    private List<StateTransition> transitions;
    private Map<String, Object> context;

    public boolean canTransition(String targetState);
    public void transition(String targetState, String triggeredBy);
}

class StateTransition {
    private String transitionId;
    private WorkflowState fromState;
    private WorkflowState toState;
    private List<TransitionCondition> conditions;
    private List<TransitionAction> actions;

    public boolean isValid(WorkflowContext context);
    public void execute(WorkflowContext context);
}
```

---

## 📈 **7. Monitoring & Observability Components**

### **Entities Identification**

```
Core Entities:
├── Metric
├── Log
├── Trace
├── Span
├── Alert
├── Dashboard
├── HealthCheck
└── Counter/Gauge/Histogram
```

### **Class Design**

```java
class Metric {
    private String metricId;
    private String name;
    private MetricType type; // COUNTER, GAUGE, HISTOGRAM, TIMER
    private Map<String, String> tags;
    private Object value;
    private long timestamp;

    public void increment();
    public void record(double value);
}

class HealthCheck {
    private String checkId;
    private String name;
    private HealthStatus status; // HEALTHY, DEGRADED, UNHEALTHY
    private String description;
    private long lastCheckedAt;
    private long responseTimeMs;

    public HealthCheckResult execute();
}
```

---

## 🎯 **How to Use These in LLD Interviews**

### **Interview Strategy:**

1. **Start with Core Entities** - Identify main business objects
2. **Define Relationships** - How entities interact with each other
3. **Design Service Layer** - Business logic and operations
4. **Add Infrastructure** - Security, caching, data access
5. **Consider Scale** - How design handles growth
6. **Discuss Trade-offs** - Why you chose specific patterns

### **Key Points to Remember:**

- ✅ **Focus on OOP Design** - Classes, interfaces, inheritance
- ✅ **Use Design Patterns** - Show knowledge of standard solutions
- ✅ **Think Extensibility** - How easy to add new features
- ✅ **Consider SOLID** - Mention principles in your design
- ✅ **Handle Edge Cases** - Show robust thinking
- ✅ **Explain Trade-offs** - Discuss alternative approaches

### **What NOT to Focus On:**

- ❌ Detailed algorithm implementations
- ❌ Database indexing strategies (unless specifically asked)
- ❌ Network protocols (unless building networking system)
- ❌ Hardware considerations
- ❌ Deployment and DevOps details

This comprehensive list covers ALL the components you'll need for any LLD interview. Master these patterns and approaches, and you'll be able to tackle any system design question with confidence! 🚀
