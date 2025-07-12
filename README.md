# Dreams MCP Server

A mystical TypeScript MCP (Model Context Protocol) server that provides access to a dreamscape crafting system - a fluid, unpredictable realm where dream logic governs reality and narrative evolves through the interplay of consciousness and chaos.

## The Dreamscape

This server exposes four core tools for crafting and navigating the dream realm:

- **`dreamscape`** - Reveals the current state of the dreamscape including all properties, scene description, and narrative history
- **`attempt_narrative`** - Weaves new entries into the ongoing dream story (the dreamscape may alter your words according to its own logic)
- **`attempt_transition`** - Triggers a complete dreamscape transition with randomized properties while preserving narrative memory
- **`submerge`** - Starts a completely new dreamscape with fresh narrative, clearing all previous dream history

### The Nine Properties of Dreams

Each dreamscape is governed by nine fundamental properties that shift and flow like the tides of sleep:

- **emotional_tone** (string): The overall emotional atmosphere permeating the dream
- **familiarity_ratio** (0-100): How familiar versus strange the dream feels
- **symbolic_density** (0-100): How symbolic versus literal dream elements are
- **sensory_cross_bleeding** (0-100): How much the senses blend and merge
- **coherence_level** (0-100): How logically consistent the dream remains  
- **boundary_stability** (0-100): How stable object and space boundaries are
- **causality_strength** (0-100): How much cause-and-effect applies
- **memory_persistence** (0-100): How well memories stick and endure
- **agency_level** (0-100): How much control the dreamer possesses

### Dream Logic

The dreamscape will fight you. It follows its own mysterious logic:

- Lower `coherence_level`, `causality_strength`, and `agency_level` increase the likelihood that your attempts will be altered
- The dreamscape may transform your words, scenes, and intentions according to its current state
- Properties shift organically during interactions, creating an ever-evolving dream experience
- Dream resistance operates through three checks: agency (controls will), causality (controls effects), and coherence (controls logic)
- Nothing is guaranteed - the dream decides what becomes real

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

### Option 1: Using npx (Recommended)

Run the dreamscape server directly without installation:
```sh
npx mcp-dreams-server
```

The server runs in stdio mode by default, perfect for MCP usage.

### Option 2: Local Development

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Build the server:**
   ```sh
   npm run build
   ```

3. **Start the dreamscape:**
   ```sh
   npm start
   ```
   
   Or for development:
   ```sh
   npm run dev
   ```

### Future HTTP Support

The CLI supports HTTP mode (coming soon):
```sh
npx mcp-dreams-server --http --port=8080
```

## Tools Reference

### `dreamscape()`
Reveals the complete current state of the dreamscape - its properties, the scene that manifests, and the accumulated narrative threads.

**Parameters:** None  
**Returns:** JSON object containing the full dreamscape state

### `attempt_narrative(narrative_entry, alternate_entry, opposite_entry, recede_entry)`
Attempts to weave a new thread into the dream's ongoing story. The dreamscape may accept your words as-is, or transform them according to its current logic and coherence levels. You MUST provide four different narrative possibilities that the dream logic can choose from.

**Parameters:**
- `narrative_entry` (string): The narrative entry to add to the dream story
- `alternate_entry` (string): An alternate narrative guided by the emotions of the dream
- `opposite_entry` (string): The opposite of what was intended to happen
- `recede_entry` (string): The entry receding and becoming harder to achieve

**Returns:** The narrative entry as it actually manifested in the dream

### `attempt_transition(alternate_entry, opposite_entry, recede_entry)`
Triggers a complete dreamscape transition - the current scene dissolves and a new one emerges with freshly randomized properties. The narrative history persists across transitions like memories carried from one dream to the next. You MUST provide three different transition possibilities.

**Parameters:**
- `alternate_entry` (string): An alternate transition guided by the emotions of the dream
- `opposite_entry` (string): The opposite of what was intended to happen during transition
- `recede_entry` (string): The transition receding and becoming harder to achieve

**Returns:** Description of the new dreamscape that has emerged

### `submerge()`
Starts a completely new dreamscape with fresh narrative, clearing all previous dream history. This is like waking up and entering a completely different dream.

**Parameters:** None  
**Returns:** JSON object containing the new dreamscape state

## Prompts

The server also provides an `intro` prompt that explains the dreamscape system and provides guidance on how to interact with it in a mystical, dreamcrafter style.

## Claude Desktop Configuration

To connect this dreamscape to Claude Desktop, you MUST modify your configuration file [[memory:2269804]]:

1. **Locate your Claude Desktop configuration:**
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

2. **Add the server configuration using npx (recommended):**
   ```json
   {
     "mcpServers": {
       "dreams": {
         "command": "npx",
         "args": ["mcp-dreams-server"],
         "env": {}
       }
     }
   }
   ```

   **Alternative: Local installation path**
   ```json
   {
     "mcpServers": {
       "dreams": {
         "command": "node",
         "args": ["/path/to/your/mcp-dreams/dist/cli.js"],
         "env": {}
       }
     }
   }
   ```

3. **If using the local path option**, update the path in the `args` array to match your actual installation location

4. **Restart Claude Desktop**

5. **Begin dreaming** - The tools SHOULD now be available in your conversations

## Logging

The server includes comprehensive logging that can be controlled via the `LOG_LEVEL` environment variable:

- `DEBUG`: Detailed operation logs including property calculations
- `INFO`: General operation logs (default)
- `WARN`: Warning messages
- `ERROR`: Error messages only

Set the log level when starting the server:
```sh
LOG_LEVEL=DEBUG npm start
```

## Dream Mechanics

The dreamscape system uses sophisticated probability mechanics:

- **Property Randomization**: Core properties (agency, causality, coherence) are mathematically constrained so their product remains around 0.5, ensuring balanced unpredictability
- **Action Resistance**: Each attempt faces three sequential checks against agency, causality, and coherence levels
- **Narrative Persistence**: The narrative history accumulates across all interactions, creating a continuous dream story
- **Emotional Atmosphere**: Combines two random emotions to create complex emotional tones
- **Scene Variety**: Draws from 40+ carefully crafted dreamscape scenarios

## Entering the Dreamscape

The dreamscape system is designed to be mystical yet extensible. You MAY modify the dream logic, add new properties, or implement additional tools - but remember that the dreamscape has its own will.

## License

MIT 