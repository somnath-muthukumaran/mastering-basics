# 🌐 Senior Software Engineer Networking Concepts Roadmap
*Essential networking knowledge for system design, architecture, and technical leadership*

---

## 🎯 **Learning Philosophy for Senior Engineers**

### **🎓 Learning Approach:**
- **Theory + Practical Application** - Every concept tied to real system design decisions
- **Problem-Solving Focus** - How networking impacts scalability, reliability, and performance
- **Leadership Perspective** - Understanding trade-offs to guide architecture decisions
- **Hands-on Labs** - Build and test networking concepts with real tools

### **🏗️ System Design Integration:**
Each networking concept will be taught with:
- **When to use it** in system architecture
- **Trade-offs** and performance implications  
- **Real-world examples** from major tech companies
- **Interview preparation** for system design questions
- **Team guidance** scenarios for technical leadership

---

## 🎯 **Phase 1: Network Fundamentals & Models (Weeks 1-2)**

### **📊 Week 1: OSI Model & TCP/IP Stack - The Foundation**

**🎯 Senior-Level Goals:**
- [ ] Master the OSI model for debugging complex network issues
- [ ] Understand TCP/IP stack for microservices architecture
- [ ] Recognize performance bottlenecks at different layers
- [ ] Make informed decisions about protocol choices

**🛠️ Hands-on Labs:**
- [ ] **Lab 1A**: Packet capture analysis using Wireshark
- [ ] **Lab 1B**: Implement a simple TCP client-server in multiple languages
- [ ] **Lab 1C**: Network troubleshooting simulation with real scenarios

**📚 Key Concepts:**
```
Layer 7 (Application): HTTP/HTTPS, gRPC, GraphQL, WebSockets
Layer 6 (Presentation): TLS/SSL, compression, serialization
Layer 5 (Session): Session management, connection pooling
Layer 4 (Transport): TCP vs UDP, port management, congestion control
Layer 3 (Network): IP routing, subnetting, load balancing
Layer 2 (Data Link): Ethernet, switching, VLANs
Layer 1 (Physical): Bandwidth, latency, network hardware
```

**⏱️ Performance & Trade-offs:**
- **TCP vs UDP**: Reliability vs Speed
  - TCP: Guaranteed delivery, higher latency (~1-3ms overhead)
  - UDP: Fast delivery, potential packet loss (<1ms overhead)
  - **Use TCP for**: Database connections, file transfers, API calls
  - **Use UDP for**: Real-time gaming, live streaming, DNS queries

- **Protocol Overhead Analysis**:
  - HTTP/1.1: ~500-800 bytes per request (headers)
  - HTTP/2: ~30-50 bytes per request (header compression)
  - gRPC: ~20-40 bytes per request (binary protocol)
  - WebSocket: ~2-14 bytes per frame (after handshake)

**🏗️ System Design Applications:**
- **Microservices Communication**: When to use HTTP vs gRPC vs message queues
- **Real-time Systems**: WebSocket vs Server-Sent Events vs polling
- **Database Connections**: Connection pooling at different layers
- **Load Balancer Placement**: L4 vs L7 load balancing decisions

**✅ Success Criteria:**
- Can diagnose network issues using packet analysis
- Understand protocol overhead impact on system performance
- Make informed architecture decisions about communication patterns
- Explain network concepts to junior engineers

---

### **🔗 Week 2: TCP Deep Dive - Connection Management**

**🎯 Senior-Level Goals:**
- [ ] Master TCP connection lifecycle for high-performance applications
- [ ] Understand congestion control for distributed systems
- [ ] Optimize TCP settings for different use cases
- [ ] Design connection pooling strategies

**🛠️ Hands-on Labs:**
- [ ] **Lab 2A**: TCP connection pooling implementation and benchmarking
- [ ] **Lab 2B**: Congestion window analysis under different network conditions
- [ ] **Lab 2C**: Connection timeout optimization for microservices

**📚 Key Concepts:**
- **TCP Handshake Process**:
  ```
  Client → SYN → Server
  Client ← SYN-ACK ← Server  
  Client → ACK → Server
  Time: ~1.5x Round Trip Time (RTT)
  ```

- **Connection States & Management**:
  - LISTEN, SYN-SENT, SYN-RECEIVED, ESTABLISHED
  - FIN-WAIT, CLOSE-WAIT, TIME-WAIT
  - Connection pool sizing: `connections = (requests_per_second × average_response_time) / utilization_factor`

- **Flow Control & Congestion Control**:
  - Sliding window protocol
  - Slow start, congestion avoidance, fast retransmit
  - TCP Cubic, BBR (Bottleneck Bandwidth and RTT)
  - Buffer sizing: `BDP = Bandwidth × RTT`

**⏱️ Performance Optimization:**
- **Connection Reuse**: 10-50x performance improvement over connection-per-request
- **Keep-Alive Settings**:
  ```
  tcp_keepalive_time = 7200s (start probing after 2 hours)
  tcp_keepalive_intvl = 75s (probe interval)  
  tcp_keepalive_probes = 9 (max probes before timeout)
  ```
- **Socket Buffer Tuning**:
  ```
  # High-bandwidth, high-latency networks
  net.core.rmem_max = 134217728  # 128MB
  net.core.wmem_max = 134217728  # 128MB
  ```

**🏗️ System Design Applications:**
- **Database Connection Pooling**: Size calculation and lifecycle management
- **HTTP/2 Multiplexing**: Single connection vs multiple connections
- **Microservice Mesh**: Service-to-service connection optimization
- **CDN Architecture**: TCP optimization at edge locations

**🛡️ Reliability Patterns:**
- **Circuit Breaker**: Fail fast on connection issues
- **Retry with Backoff**: Exponential backoff for connection failures  
- **Connection Health Checks**: Proactive connection validation
- **Graceful Degradation**: Fallback strategies for connection issues

**✅ Success Criteria:**
- Can optimize TCP settings for specific application requirements
- Design effective connection pooling strategies
- Troubleshoot TCP-related performance issues
- Guide teams on connection management best practices

---

## 🎯 **Phase 2: Modern Application Protocols (Weeks 3-4)**

### **🌐 Week 3: HTTP Evolution - 1.1 to 3.0**

**🎯 Senior-Level Goals:**
- [ ] Master HTTP/2 and HTTP/3 for high-performance web applications
- [ ] Design RESTful APIs with proper HTTP semantics
- [ ] Implement caching strategies at multiple layers
- [ ] Optimize HTTP for different client types (web, mobile, IoT)

**🛠️ Hands-on Labs:**
- [ ] **Lab 3A**: HTTP/2 server push implementation and measurement
- [ ] **Lab 3B**: HTTP/3 QUIC protocol testing and comparison
- [ ] **Lab 3C**: RESTful API design with proper caching headers

**📚 Key Concepts:**

**HTTP/1.1 Limitations & Solutions:**
```
Problems:
- Head-of-line blocking (6 connections per domain limit)
- Header redundancy (cookies sent with every request)
- No server push capability
- Text-based protocol overhead

Solutions in HTTP/2:
- Multiplexing (multiple streams over single connection)
- Header compression (HPACK algorithm)
- Server push (proactive resource delivery)
- Binary framing (more efficient parsing)
```

**HTTP/2 Features:**
- **Stream Multiplexing**: Up to 100+ concurrent streams per connection
- **Header Compression**: 85-95% header size reduction with HPACK
- **Server Push**: 20-30% faster page loads for optimized scenarios
- **Flow Control**: Per-stream and connection-level control

**HTTP/3 & QUIC Advantages:**
- **0-RTT Connection**: Resume connections without handshake
- **Independent Streams**: No head-of-line blocking at transport layer
- **Connection Migration**: Maintain connections across network changes
- **Built-in Security**: Encryption by default

**⏱️ Performance Comparison:**
```
HTTP/1.1: 100 requests = 100 × RTT (with pipelining issues)
HTTP/2:   100 requests = 1 × RTT + processing time
HTTP/3:   100 requests = 0-1 × RTT + processing time (with 0-RTT)

Typical Performance Gains:
- HTTP/2 vs HTTP/1.1: 15-50% faster page loads
- HTTP/3 vs HTTP/2: 5-15% additional improvement
- Server Push: 10-25% faster (when properly implemented)
```

**🏗️ System Design Applications:**
- **API Gateway Design**: Protocol translation and optimization
- **CDN Architecture**: HTTP/2 push strategies for static assets
- **Mobile API Design**: Optimizing for high-latency, unstable connections
- **Microservices Communication**: When to use HTTP/2 vs gRPC

**📊 HTTP Method Design Patterns:**
```
GET    /users/123        - Idempotent, cacheable
POST   /users            - Create new resource
PUT    /users/123        - Idempotent update/create
PATCH  /users/123        - Partial update
DELETE /users/123        - Idempotent deletion
HEAD   /users/123        - Get metadata only (for caching)
OPTIONS /users           - CORS preflight, API discovery
```

**🔄 Caching Strategy Design:**
```
Cache-Control Strategies:
- public, max-age=86400    - CDN cacheable for 1 day
- private, max-age=300     - Browser cache for 5 minutes  
- no-cache                 - Always revalidate with server
- no-store                 - Never cache (sensitive data)
- must-revalidate          - Revalidate when stale

ETag Implementation:
- Strong ETags: "123456789" (byte-for-byte identical)
- Weak ETags: W/"123456789" (semantically equivalent)
```

**✅ Success Criteria:**
- Can design HTTP APIs that scale to millions of requests
- Understand HTTP/2 and HTTP/3 optimization opportunities
- Implement comprehensive caching strategies
- Guide teams on HTTP best practices and performance optimization

---

### **⚡ Week 4: gRPC & Modern RPC - High-Performance Communication**

**🎯 Senior-Level Goals:**
- [ ] Master gRPC for microservices communication
- [ ] Implement streaming patterns for real-time data
- [ ] Design service contracts with Protocol Buffers
- [ ] Optimize gRPC for different network conditions

**🛠️ Hands-on Labs:**
- [ ] **Lab 4A**: gRPC service implementation with all streaming types
- [ ] **Lab 4B**: Protocol Buffers schema evolution and compatibility
- [ ] **Lab 4C**: gRPC vs REST performance benchmarking

**📚 Key Concepts:**

**gRPC Communication Patterns:**
```
1. Unary RPC (Request-Response):
   Client → Single Request → Server
   Client ← Single Response ← Server
   Use: Simple API calls, CRUD operations

2. Server Streaming:
   Client → Single Request → Server
   Client ← Stream of Responses ← Server  
   Use: Real-time updates, large data downloads

3. Client Streaming:
   Client → Stream of Requests → Server
   Client ← Single Response ← Server
   Use: File uploads, batch operations

4. Bidirectional Streaming:
   Client ↔ Stream of Messages ↔ Server
   Use: Chat systems, real-time collaboration
```

**Protocol Buffers Advantages:**
- **Size**: 3-10x smaller than JSON
- **Speed**: 20-100x faster serialization than JSON
- **Type Safety**: Compile-time type checking
- **Evolution**: Forward and backward compatibility
- **Cross-Language**: Single schema, multiple languages

**⏱️ Performance Comparison:**
```
Serialization Benchmarks (1000 objects):
JSON:        ~2.5ms serialize, ~3.2ms deserialize, 1.2KB size
Protobuf:    ~0.1ms serialize, ~0.08ms deserialize, 0.3KB size
MessagePack: ~0.8ms serialize, ~1.1ms deserialize, 0.9KB size

Network Performance:
gRPC (HTTP/2): ~5-15ms latency, multiplexed connections
REST (HTTP/1.1): ~20-50ms latency, connection overhead  
REST (HTTP/2): ~8-20ms latency, header compression benefits
```

**🏗️ System Design Applications:**
- **Service Mesh Communication**: gRPC as the backbone for microservices
- **Real-time Analytics**: Streaming gRPC for data pipelines
- **Mobile Backend**: gRPC-Web for efficient mobile communication
- **IoT Systems**: Lightweight gRPC for device communication

**📋 gRPC Best Practices:**
```protobuf
// Schema Design Best Practices
syntax = "proto3";

service UserService {
  // Use descriptive names
  rpc GetUser(GetUserRequest) returns (User);
  rpc ListUsers(ListUsersRequest) returns (ListUsersResponse);
  
  // Design for streaming when appropriate
  rpc StreamUserUpdates(StreamUserUpdatesRequest) 
    returns (stream UserUpdate);
}

message User {
  // Use field numbers 1-15 for frequently used fields (1 byte encoding)
  string id = 1;
  string name = 2;
  string email = 3;
  
  // Use higher numbers for less frequent fields
  map<string, string> metadata = 20;
  
  // Always use optional for nullable fields
  optional string profile_image_url = 21;
}

// Pagination pattern
message ListUsersRequest {
  int32 page_size = 1;    // Limit results
  string page_token = 2;  // Cursor for pagination
  string filter = 3;      // Query filter
}
```

**🔄 Error Handling Patterns:**
```
gRPC Status Codes:
- OK (0): Success
- INVALID_ARGUMENT (3): Bad request data
- NOT_FOUND (5): Resource doesn't exist
- ALREADY_EXISTS (6): Resource conflict
- PERMISSION_DENIED (7): Authorization failure
- RESOURCE_EXHAUSTED (8): Rate limiting
- UNAVAILABLE (14): Service temporarily unavailable
- DEADLINE_EXCEEDED (4): Request timeout

Retry Strategies:
- Exponential backoff with jitter
- Idempotent method identification
- Circuit breaker integration
- Retry budgets to prevent cascade failures
```

**🛡️ Production Considerations:**
- **Load Balancing**: Client-side vs server-side load balancing
- **Service Discovery**: Integration with Consul, etcd, or Kubernetes
- **Security**: mTLS authentication and authorization
- **Monitoring**: Request tracing, metrics collection, health checks
- **Deployment**: Blue-green deployments with schema compatibility

**✅ Success Criteria:**
- Can design efficient gRPC services for microservices architecture
- Understand Protocol Buffers schema evolution strategies
- Implement all gRPC streaming patterns appropriately
- Guide teams on gRPC adoption and best practices

---

## 🎯 **Phase 3: Network Security & Authentication (Weeks 5-6)**

### **🔐 Week 5: TLS/SSL & Cryptographic Protocols**

**🎯 Senior-Level Goals:**
- [ ] Master TLS handshake process for secure communication design
- [ ] Implement certificate management strategies for microservices
- [ ] Design mTLS authentication for zero-trust architectures
- [ ] Optimize TLS performance for high-traffic applications

**🛠️ Hands-on Labs:**
- [ ] **Lab 5A**: TLS certificate automation with Let's Encrypt and cert-manager
- [ ] **Lab 5B**: mTLS implementation for service-to-service communication
- [ ] **Lab 5C**: TLS performance optimization and session resumption

**📚 Key Concepts:**

**TLS Handshake Process (TLS 1.3):**
```
1. Client Hello:
   - Supported cipher suites
   - Client random value
   - Supported TLS versions
   - Server Name Indication (SNI)

2. Server Hello + Certificate:
   - Chosen cipher suite
   - Server random value  
   - Server certificate chain
   - Server key exchange

3. Key Exchange & Finished:
   - Client verifies certificate
   - Generates pre-master secret
   - Both derive session keys
   - Exchange "Finished" messages

Time: 1 RTT (vs 2 RTT in TLS 1.2)
```

**Certificate Management Strategies:**
```yaml
# Kubernetes cert-manager example
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: api-tls
spec:
  secretName: api-tls-secret
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
  - api.example.com
  - api-internal.example.com
```

**mTLS Implementation Patterns:**
- **Service Mesh**: Automatic mTLS with Istio/Linkerd
- **API Gateway**: Client certificate validation
- **Database Connections**: Certificate-based authentication
- **Container Security**: Pod-to-pod encrypted communication

**⏱️ Performance Optimization:**
```
TLS Performance Factors:
- Handshake Time: 20-100ms additional latency
- CPU Overhead: 1-10% depending on cipher suite
- Session Resumption: 90% reduction in handshake time
- OCSP Stapling: Eliminates real-time revocation checks

Optimization Strategies:
1. Session Resumption (TLS tickets)
2. Connection Keep-Alive
3. Hardware Acceleration (AES-NI)
4. Cipher Suite Selection (ECDHE-AES-GCM)
5. Certificate Chain Optimization (<5KB total)
```

**🏗️ System Design Applications:**
- **Zero Trust Architecture**: mTLS for all service communication
- **API Security**: TLS termination strategies (edge vs origin)
- **Database Security**: Encrypted connections with certificate rotation
- **CDN Integration**: TLS optimization at edge locations

**🔄 Certificate Lifecycle Management:**
```
Certificate Automation Pipeline:
1. Certificate Request (CSR generation)
2. Domain Validation (DNS-01 or HTTP-01 challenge)
3. Certificate Issuance (CA signing)
4. Certificate Deployment (secret update)
5. Application Reload (graceful restart)
6. Certificate Monitoring (expiration alerts)
7. Automatic Renewal (30 days before expiry)

Tools: cert-manager, ACME protocol, HashiCorp Vault
```

**🛡️ Security Best Practices:**
- **Perfect Forward Secrecy**: Use ECDHE key exchange
- **Certificate Transparency**: Monitor CT logs for unauthorized certificates
- **HSTS**: Enforce HTTPS with preload lists
- **Certificate Pinning**: Pin certificates in mobile apps
- **OCSP Must-Staple**: Require revocation status checking

**✅ Success Criteria:**
- Can design secure TLS architectures for enterprise applications
- Implement automated certificate management pipelines
- Optimize TLS performance for high-traffic scenarios
- Guide teams on TLS security best practices and compliance

---

### **🔑 Week 6: Authentication & Authorization Protocols**

**🎯 Senior-Level Goals:**
- [ ] Master OAuth 2.0 and OpenID Connect for modern authentication
- [ ] Design JWT-based stateless authentication systems
- [ ] Implement API key management and rate limiting
- [ ] Build zero-trust security architectures

**🛠️ Hands-on Labs:**
- [ ] **Lab 6A**: OAuth 2.0 server implementation with PKCE
- [ ] **Lab 6B**: JWT token validation and refresh token rotation
- [ ] **Lab 6C**: API gateway with authentication and rate limiting

**📚 Key Concepts:**

**OAuth 2.0 Flow Types:**
```
1. Authorization Code Flow (Web Apps):
   Client → Authorization Request → Auth Server
   User → Login & Consent → Auth Server  
   Client ← Authorization Code ← Auth Server
   Client → Code + Client Secret → Auth Server
   Client ← Access Token ← Auth Server

2. PKCE Flow (Mobile/SPA):
   - Code Verifier/Challenge prevents code interception
   - No client secret required
   - Secure for public clients

3. Client Credentials Flow (Service-to-Service):
   Client → Client ID + Secret → Auth Server
   Client ← Access Token ← Auth Server
```

**JWT Token Design:**
```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT", 
    "kid": "key-id-2023"
  },
  "payload": {
    "iss": "https://auth.example.com",
    "sub": "user123",
    "aud": ["api.example.com"],
    "exp": 1609459200,
    "iat": 1609455600,
    "scope": "read:users write:posts",
    "custom_claim": "custom_value"
  }
}

Security Considerations:
- Short expiry (5-15 minutes for access tokens)
- Refresh token rotation
- Audience validation  
- Signature verification (RS256 preferred over HS256)
- Secure storage (httpOnly cookies for web, keychain for mobile)
```

**API Key Management:**
```
Key Types:
1. Public API Keys (rate limiting, analytics)
2. Private API Keys (authentication, sensitive operations)
3. Service Keys (service-to-service communication)

Key Rotation Strategy:
- Generate new key before expiry
- Overlap period for zero-downtime rotation
- Automated rotation with secret management
- Audit logging for key usage

Rate Limiting Patterns:
- Token Bucket: Burst traffic handling
- Fixed Window: Simple implementation
- Sliding Window: More accurate rate limiting
- Distributed Rate Limiting: Redis-based coordination
```

**⏱️ Performance & Scalability:**
```
Authentication Performance:
- JWT Verification: ~0.1-1ms per request
- Database Lookup: ~1-10ms per request  
- Cache Hit: ~0.01-0.1ms per request

Scaling Strategies:
1. Stateless JWT (no database lookup)
2. Token Caching (Redis/Memcached)
3. Connection Pooling (auth service)
4. CDN for public keys (JWKS endpoint)
5. Edge Authentication (Cloudflare Workers)
```

**🏗️ System Design Applications:**
- **Microservices Security**: Service-to-service authentication patterns
- **API Gateway**: Centralized authentication and authorization
- **Multi-tenant Systems**: Tenant isolation and access control
- **Third-party Integrations**: OAuth provider implementation

**🔄 Token Management Patterns:**
```javascript
// Refresh Token Rotation
class TokenManager {
  async refreshToken(refreshToken) {
    const response = await fetch('/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      })
    });
    
    const tokens = await response.json();
    
    // Store new tokens securely
    await this.storeTokens(tokens);
    
    // Revoke old refresh token (rotation)
    await this.revokeToken(refreshToken);
    
    return tokens.access_token;
  }
}

// Automatic Token Refresh
class APIClient {
  async request(url, options = {}) {
    let token = await this.getValidToken();
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.status === 401) {
      // Token expired, refresh and retry
      token = await this.refreshToken();
      return this.request(url, options);
    }
    
    return response;
  }
}
```

**🛡️ Security Best Practices:**
- **PKCE for All Flows**: Prevent authorization code interception
- **State Parameter**: CSRF protection in OAuth flows
- **Nonce for OpenID**: Replay attack prevention
- **Secure Storage**: Never store tokens in localStorage
- **Token Binding**: Bind tokens to specific clients/devices
- **Audit Logging**: Track authentication events and anomalies

**🏢 Enterprise Integration Patterns:**
- **SAML Integration**: Enterprise SSO compatibility
- **LDAP/Active Directory**: Corporate identity integration
- **Multi-factor Authentication**: TOTP, SMS, push notifications
- **Conditional Access**: Location, device, risk-based authentication

**✅ Success Criteria:**
- Can design scalable authentication systems for enterprise applications
- Implement secure OAuth 2.0 and OpenID Connect flows
- Build comprehensive API security strategies
- Guide teams on authentication best practices and compliance

---

## 🎯 **Phase 4: Load Balancing & Traffic Management (Weeks 7-8)**

### **⚖️ Week 7: Load Balancing Strategies & Algorithms**

**🎯 Senior-Level Goals:**
- [ ] Master Layer 4 vs Layer 7 load balancing trade-offs
- [ ] Design load balancing strategies for different application patterns
- [ ] Implement health checks and failover mechanisms
- [ ] Optimize load distribution for performance and reliability

**🛠️ Hands-on Labs:**
- [ ] **Lab 7A**: HAProxy configuration with multiple load balancing algorithms
- [ ] **Lab 7B**: Kubernetes ingress controller with health checks
- [ ] **Lab 7C**: Service mesh load balancing with circuit breakers

**📚 Key Concepts:**

**Load Balancing Layers:**
```
Layer 4 (Transport Layer):
- Routes based on IP and port
- No application knowledge
- Lower latency (~0.1-0.5ms)
- Higher throughput (>1M connections)
- Examples: AWS NLB, HAProxy TCP mode

Layer 7 (Application Layer):  
- Routes based on HTTP headers, URL, cookies
- Content-aware routing
- Higher latency (~1-5ms)
- Lower throughput (~100K connections)
- Examples: AWS ALB, NGINX, Envoy
```

**Load Balancing Algorithms:**
```
1. Round Robin:
   - Simple, even distribution
   - Good for homogeneous servers
   - Doesn't consider server load

2. Weighted Round Robin:
   - Assign weights based on capacity
   - Server A (weight=3): 3 requests
   - Server B (weight=1): 1 request

3. Least Connections:
   - Route to server with fewest active connections
   - Good for long-lived connections
   - Requires connection tracking

4. Weighted Least Connections:
   - Considers both connection count and server capacity
   - Formula: connections / weight

5. IP Hash:
   - Hash client IP to determine server
   - Session affinity (sticky sessions)
   - Good for stateful applications

6. Consistent Hashing:
   - Minimizes redistribution when servers change
   - Good for caching layers
   - Ring-based algorithm

7. Least Response Time:
   - Routes to server with fastest response
   - Requires health check latency tracking
   - Adaptive to server performance
```

**⏱️ Performance Characteristics:**
```
Algorithm Performance Comparison:
Round Robin:           ~0.01ms decision time, even distribution
Least Connections:     ~0.1ms decision time, load-aware
IP Hash:              ~0.05ms decision time, session affinity  
Consistent Hash:       ~0.1ms decision time, minimal redistribution
Least Response Time:   ~0.2ms decision time, performance-aware

Throughput Impact:
Layer 4 LB: 1M+ connections/second
Layer 7 LB: 100K-500K requests/second (depending on processing)
```

**🏗️ System Design Applications:**
- **Microservices Architecture**: Service-to-service load balancing
- **Database Clustering**: Read replica load balancing
- **CDN Origins**: Origin server load distribution
- **WebSocket Scaling**: Session-aware load balancing

**🔄 Health Check Patterns:**
```yaml
# Kubernetes Health Check Configuration
apiVersion: v1
kind: Service
metadata:
  name: webapp
spec:
  selector:
    app: webapp
  ports:
  - port: 80
    targetPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: webapp
        image: webapp:latest
        ports:
        - containerPort: 8080
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 2
```

**🛡️ Resilience Patterns:**
```
1. Circuit Breaker:
   - Monitor failure rate
   - Open circuit on threshold (e.g., 50% failures)
   - Half-open for gradual recovery

2. Retry with Backoff:
   - Exponential backoff: 1s, 2s, 4s, 8s
   - Jitter to prevent thundering herd
   - Maximum retry attempts

3. Bulkhead Isolation:
   - Separate connection pools
   - Resource isolation by service type
   - Prevent cascade failures

4. Timeout Management:
   - Connection timeout: 3-5s
   - Request timeout: 30-60s
   - Keep-alive timeout: 60-120s
```

**📊 Monitoring & Observability:**
```
Key Metrics:
- Request rate (requests/second)
- Error rate (4xx, 5xx responses)
- Response time (p50, p95, p99)
- Active connections
- Backend health status

Health Check Types:
1. HTTP/HTTPS: GET /health (200 OK)
2. TCP: Port connectivity check
3. Custom: Application-specific logic
4. gRPC: Health check service
```

**✅ Success Criteria:**
- Can choose appropriate load balancing strategies for different use cases
- Design comprehensive health check and failover systems
- Implement resilience patterns for high-availability applications
- Guide teams on load balancer selection and configuration

---

### **🌍 Week 8: CDN & Edge Computing**

**🎯 Senior-Level Goals:**
- [ ] Design global content delivery strategies
- [ ] Implement edge computing for performance optimization
- [ ] Master caching strategies at multiple layers
- [ ] Optimize content delivery for different media types

**🛠️ Hands-on Labs:**
- [ ] **Lab 8A**: CloudFront distribution with custom behaviors
- [ ] **Lab 8B**: Edge computing with Cloudflare Workers
- [ ] **Lab 8C**: Multi-tier caching strategy implementation

**📚 Key Concepts:**

**CDN Architecture:**
```
Global CDN Structure:
1. Origin Server (Primary content source)
2. Regional Edge Caches (Major cities)
3. Edge Locations (Local ISPs)
4. Client (End user)

Request Flow:
Client → Edge Location (cache miss) → Regional Cache (cache miss) → Origin Server
Client ← Edge Location ← Regional Cache ← Origin Server (with caching)
Subsequent requests: Client ← Edge Location (cache hit)
```

**Caching Strategies:**
```
1. Static Content Caching:
   - Images, CSS, JS: Cache for 1 year
   - Cache-Control: public, max-age=31536000, immutable
   - Use versioned URLs (e.g., style.v123.css)

2. Semi-Static Content:
   - API responses