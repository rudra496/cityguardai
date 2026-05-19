export type Severity = "High" | "Medium" | "Low";

export type ScenarioId =
  | "world_cup_stadium"
  | "mall_weekend"
  | "downtown_rush_hour";

export interface Incident {
  id: string;
  type: string;
  severity: Severity;
  location: string;
  description: string;
  status: string;
  timestamp: string;
}

export interface MapZone {
  id: string;
  label: string;
  riskLevel: Severity;
}

export interface AgentStep {
  step: number;
  action: string;
  tool: string;
  result: string;
}

export interface ScenarioData {
  scenario: string;
  description: string;
  incidents: Incident[];
  mapZones: MapZone[];
  agentSteps: AgentStep[];
}

function ts(minutesAgo: number): string {
  return new Date(Date.now() - minutesAgo * 60000).toISOString();
}

export const scenarios: Record<ScenarioId, ScenarioData> = {
  world_cup_stadium: {
    scenario: "World Cup Stadium",
    description:
      "Final match day — 78,000 capacity stadium. Pre-kickoff crowd buildup with multiple entry gates, transit hub, and surrounding residential zone.",
    incidents: [
      {
        id: "INC-001",
        type: "Crowd Surge",
        severity: "High",
        location: "Gate B — Stadium North",
        description:
          "Crowd density exceeded safe threshold (8.2/m² vs 6.0 limit). Risk of compressive asphyxia. Immediate crowd control and gate management required.",
        status: "Escalated",
        timestamp: ts(2),
      },
      {
        id: "INC-002",
        type: "Traffic Congestion",
        severity: "Medium",
        location: "Ring Road — Stadium Access",
        description:
          "Vehicle queue length 4.2 km, average speed 12 km/h. Tailback growing at 200 m/min. Public transit diversion recommended.",
        status: "Monitoring",
        timestamp: ts(8),
      },
      {
        id: "INC-003",
        type: "Medical Emergency",
        severity: "High",
        location: "Section 114 — Concourse Level",
        description:
          "AI flag: fall detected via surveillance + stationary crowd anomaly in surrounding 5m radius. EMS dispatched automatically. Heart attack suspected.",
        status: "Escalated",
        timestamp: ts(1),
      },
      {
        id: "INC-004",
        type: "Unauthorized Drone",
        severity: "Medium",
        location: "Restricted Airspace — Above Gate A",
        description:
          "Unregistered UAV detected at 120 m AGL within 500m TFR zone. Flight path analysis suggests commercial camera drone. Security notified.",
        status: "Monitoring",
        timestamp: ts(14),
      },
      {
        id: "INC-005",
        type: "Noise Complaint Cluster",
        severity: "Low",
        location: "Residential Block — East Wing",
        description:
          "7 noise complaints in 20 min from adjacent residential towers. Decibel level at 92 dB. PA volume reduction recommended.",
        status: "Monitoring",
        timestamp: ts(22),
      },
    ],
    mapZones: [
      { id: "z1", label: "Gate A — West", riskLevel: "Low" },
      { id: "z2", label: "Gate B — North", riskLevel: "High" },
      { id: "z3", label: "Gate C — East", riskLevel: "Medium" },
      { id: "z4", label: "Gate D — South", riskLevel: "Low" },
      { id: "z5", label: "Concourse", riskLevel: "High" },
      { id: "z6", label: "Parking Lot", riskLevel: "Medium" },
      { id: "z7", label: "Ring Road", riskLevel: "Medium" },
      { id: "z8", label: "Transit Hub", riskLevel: "Low" },
      { id: "z9", label: "Residential", riskLevel: "Low" },
    ],
    agentSteps: [
      {
        step: 1,
        action: "Ingest real-time crowd telemetry from 14 sensor zones",
        tool: "Elastic MCP",
        result:
          "Received 14/14 zone feeds. Gate B at 8.2/m² (threshold: 6.0). Concourse anomaly cluster detected — 3sigma deviation.",
      },
      {
        step: 2,
        action: "Correlate crowd surge with traffic data and event schedule",
        tool: "Agent Reasoning",
        result:
          "Kickoff in 25 min + Ring Road closure = funneling through Gate B. Correlation coefficient r=0.91. Predictive: density will hit 10/m² in 8 min.",
      },
      {
        step: 3,
        action: "Classify incidents and assign severity levels",
        tool: "Agent Reasoning",
        result:
          "3 incidents flagged: Crowd Surge (High), Medical Emergency (High), Traffic Congestion (Medium). 2 additional items monitoring.",
      },
      {
        step: 4,
        action: "Log Crowd Surge incident with full context and sensor links",
        tool: "MongoDB MCP",
        result:
          "INC-001 created in incidents collection. Linked to sensor feed gate-b-north-01, video stream cam-b3. Audit trail initiated.",
      },
      {
        step: 5,
        action: "Create critical response issue for crowd management team",
        tool: "GitLab MCP",
        result:
          "Issue #347 created in ops/incident-response: 'CRITICAL — Gate B Crowd Surge, 8.2/m²'. Assigned to on-call team. SLA: 5 min.",
      },
      {
        step: 6,
        action: "Dispatch EMS to Section 114 and clear concourse path",
        tool: "Agent Reasoning",
        result:
          "EMS unit E-12 dispatched from medical station. ETA 3 min. Concourse path cleared via PA announcement. AED deployed.",
      },
      {
        step: 7,
        action: "Update all incident statuses and notify stakeholders",
        tool: "MongoDB MCP",
        result:
          "2 incidents escalated, 3 monitoring. Dashboard refreshed. Webhook sent to city command center and event security.",
      },
    ],
  },

  mall_weekend: {
    scenario: "Mall Weekend",
    description:
      "Saturday afternoon peak — 12,000 visitors in a 4-story commercial complex with food court, cinema, and underground parking.",
    incidents: [
      {
        id: "INC-101",
        type: "Fire Alert",
        severity: "High",
        location: "Food Court — Level 2, Unit FC-07",
        description:
          "Smoke detector triggered in kitchen exhaust zone. Thermal camera confirms 87°C heat source. Sprinkler system armed. Evacuation assessment in progress.",
        status: "Escalated",
        timestamp: ts(1),
      },
      {
        id: "INC-102",
        type: "Crowd Density",
        severity: "Medium",
        location: "Main Entrance — Ground Floor",
        description:
          "Entry queue growing. 2,400 visitors processed in 30 min. Density at 5.1/m² near turnstiles — approaching 6.0 threshold.",
        status: "Monitoring",
        timestamp: ts(12),
      },
      {
        id: "INC-103",
        type: "Suspicious Activity",
        severity: "Medium",
        location: "Parking Garage — Level B1, Bay 42",
        description:
          "Unattended bag detected by camera #12 for 18+ minutes. Object classification: medium duffel. Security team Bravo dispatched.",
        status: "Monitoring",
        timestamp: ts(18),
      },
      {
        id: "INC-104",
        type: "Elevator Malfunction",
        severity: "Low",
        location: "East Wing — Elevator Bank C, Car 3",
        description:
          "Elevator C3 stalled between floors 2-3. 2 occupants confirmed via intercom. Maintenance crew notified. ETA 10 min.",
        status: "Resolved",
        timestamp: ts(35),
      },
    ],
    mapZones: [
      { id: "z1", label: "Main Entrance", riskLevel: "Medium" },
      { id: "z2", label: "Food Court", riskLevel: "High" },
      { id: "z3", label: "Retail Floor 1", riskLevel: "Low" },
      { id: "z4", label: "Retail Floor 2", riskLevel: "Low" },
      { id: "z5", label: "Parking B1", riskLevel: "Medium" },
      { id: "z6", label: "Parking B2", riskLevel: "Low" },
      { id: "z7", label: "East Wing", riskLevel: "Low" },
      { id: "z8", label: "Cinema", riskLevel: "Low" },
      { id: "z9", label: "Loading Dock", riskLevel: "Low" },
    ],
    agentSteps: [
      {
        step: 1,
        action: "Pull smoke detector status and thermal camera feeds",
        tool: "Elastic MCP",
        result:
          "Smoke alarm confirmed on Level 2, Unit FC-07. Thermal anomaly at 87°C — 42°C above ambient. Kitchen exhaust duct suspected.",
      },
      {
        step: 2,
        action: "Cross-reference fire alert with occupancy and ventilation data",
        tool: "Agent Reasoning",
        result:
          "Food Court occupancy: 380 persons. HVAC smoke dampers auto-closing. Fire rated HIGH — Level 2 evacuation recommended.",
      },
      {
        step: 3,
        action: "Log fire incident with real-time sensor data and trigger evacuation",
        tool: "MongoDB MCP",
        result:
          "INC-101 created with fire protocol tag. Sensor readings attached. Evacuation Level 2 initiated — PA system activated.",
      },
      {
        step: 4,
        action: "Create P1 issue for fire response team",
        tool: "GitLab MCP",
        result:
          "Issue #412 created in ops/emergency: 'P1 — Fire Alert: Food Court Level 2'. Assigned to fire safety officer. Response en route.",
      },
      {
        step: 5,
        action: "Assess crowd density at main entrance for safe egress",
        tool: "Elastic MCP",
        result:
          "Entry rate stable at 80/min. Density 5.1/m². Entry flow can be redirected to support evacuation egress. Not threshold-exceeding.",
      },
      {
        step: 6,
        action: "Dispatch security team for unattended bag in Parking B1",
        tool: "Agent Reasoning",
        result:
          "Security team Bravo deployed to Parking B1, Bay 42. X-ray scan requested. ETA 4 min. Camera #12 recording preserved.",
      },
    ],
  },

  downtown_rush_hour: {
    scenario: "Downtown Rush Hour",
    description:
      "Monday morning peak — 180,000 commuters transiting through a dense urban core with transit hubs, construction zones, and mixed-use districts.",
    incidents: [
      {
        id: "INC-201",
        type: "Traffic Gridlock",
        severity: "High",
        location: "Main Ave & 5th St — Signal 42",
        description:
          "Signal controller malfunction causing all-red state. 12 vehicles gridlocked in intersection. Average wait 18 min. Cascading failure on 3 adjacent signals.",
        status: "Escalated",
        timestamp: ts(3),
      },
      {
        id: "INC-202",
        type: "Pedestrian Surge",
        severity: "Medium",
        location: "Central Station — South Concourse",
        description:
          "Express train arrival: 1,200 passengers in 5 min. Platform crowding at 92% capacity. Escalator queue backing into concourse.",
        status: "Monitoring",
        timestamp: ts(7),
      },
      {
        id: "INC-203",
        type: "Road Hazard",
        severity: "Medium",
        location: "Harbor Blvd — Lane 2, Near Mile 4",
        description:
          "Construction debris (steel beam section) blocking lane 2. Two lanes merging. Traffic rerouted via Elm St. Cleanup crew ETA 15 min.",
        status: "Monitoring",
        timestamp: ts(15),
      },
      {
        id: "INC-204",
        type: "Transit Delay",
        severity: "Low",
        location: "Bus Route 42 — Downtown Loop",
        description:
          "Bus 42 running 12 min behind schedule due to Signal 42 failure. 3 stops affected. Estimated 340 passengers impacted.",
        status: "Monitoring",
        timestamp: ts(20),
      },
      {
        id: "INC-205",
        type: "Noise Violation",
        severity: "Low",
        location: "Market District — Active Construction",
        description:
          "Pile driving at 92 dB exceeding 85 dB limit. 4 complaints logged. Site manager contacted. Work pause recommended until 9 AM.",
        status: "Resolved",
        timestamp: ts(45),
      },
    ],
    mapZones: [
      { id: "z1", label: "Main & 5th", riskLevel: "High" },
      { id: "z2", label: "Central Station", riskLevel: "Medium" },
      { id: "z3", label: "Harbor Blvd", riskLevel: "Medium" },
      { id: "z4", label: "Market District", riskLevel: "Low" },
      { id: "z5", label: "City Center", riskLevel: "Low" },
      { id: "z6", label: "Financial Qtr", riskLevel: "Low" },
      { id: "z7", label: "Waterfront", riskLevel: "Low" },
      { id: "z8", label: "Old Town", riskLevel: "Low" },
      { id: "z9", label: "Tech Park", riskLevel: "Low" },
    ],
    agentSteps: [
      {
        step: 1,
        action: "Ingest traffic signal status and vehicle flow telemetry",
        tool: "Elastic MCP",
        result:
          "Signal 42 in all-red state for 8 min (heartbeat lost). 12 vehicles gridlocked. 3 downstream signals showing queuing. Abnormal pattern confirmed.",
      },
      {
        step: 2,
        action: "Correlate signal failure with transit schedule and pedestrian data",
        tool: "Agent Reasoning",
        result:
          "Rush hour peak + Signal 42 failure = cascading delay. Bus Route 42 downstream impact confirmed. Pedestrian surge at Central Station compounding.",
      },
      {
        step: 3,
        action: "Log traffic incident with signal controller diagnostics",
        tool: "MongoDB MCP",
        result:
          "INC-201 created. Severity: HIGH. Linked to traffic-signal-api/controller-42. Diagnostic dump attached.",
      },
      {
        step: 4,
        action: "Create emergency issue for traffic engineering and field crew",
        tool: "GitLab MCP",
        result:
          "Issue #89 in ops/traffic: 'Signal 42 Failure — Gridlock at Main & 5th'. Field dispatch auto-created. Manual override technician en route.",
      },
      {
        step: 5,
        action: "Monitor pedestrian flow at Central Station for overcrowding",
        tool: "Elastic MCP",
        result:
          "Platform 3 at 92%. Next express in 3 min. Crowd management staff deployed to concourse. Flow manageable — continuing observation.",
      },
      {
        step: 6,
        action: "Dispatch cleanup crew for Harbor Blvd road hazard",
        tool: "Agent Reasoning",
        result:
          "Crew assigned from depot 7. Lane 2 Harbor Blvd coned off. Traffic rerouted via Elm St. Estimated clearance: 15 min.",
      },
      {
        step: 7,
        action: "Update all incident records and push commuter alerts",
        tool: "MongoDB MCP",
        result:
          "1 escalated, 3 monitoring, 1 resolved. Transit alert pushed to 12,000 app users. Dashboard refreshed. City ops center notified.",
      },
    ],
  },
};

export const scenarioOptions: { value: ScenarioId; label: string; emoji: string }[] = [
  { value: "world_cup_stadium", label: "World Cup Stadium", emoji: "Stadium" },
  { value: "mall_weekend", label: "Mall Weekend", emoji: "Mall" },
  { value: "downtown_rush_hour", label: "Downtown Rush Hour", emoji: "Transit" },
];
