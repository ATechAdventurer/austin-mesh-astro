# Austin Mesh Website

![Austin Mesh Logo](src/assets/images/Austin-Mesh-Logo.svg)

~The official website for Austin Mesh~ A prototype port of Austin Mesh's website - a community group building a free, decentralized text messaging network in Austin, Texas using [Meshtastic](https://meshtastic.org/) technology.

## 🚀 About Austin Mesh

Austin Mesh is a community-driven initiative working to build a resilient mesh network of [Meshtastic](https://meshtastic.org/) radios throughout Austin, Texas. This network acts like a city-wide text messaging system, allowing people to communicate publicly or privately with anyone on the network without relying on cell towers, internet, or power grid infrastructure.

### Key Features

- **Decentralized**: No central server or corporation controls the network
- **Open**: Free to join, no permissions required, open-source software
- **Resilient**: Solar-powered radios work without cell towers, internet, or electricity
- **Emergency Ready**: Provides a "network of last resort" for ordinary citizens
- **Community Driven**: Built and maintained by volunteers across Austin

### Network Coverage

As of 2024, Austin Mesh provides coverage throughout:
- Most of downtown, central, and East Austin
- Intermittent coverage extending to South, Southwest (Dripping Springs), North, and Leander
- Active expansion efforts ongoing

### Community Partners

Austin Mesh partners with local institutions including:
- **Austin Independent School District (AISD)** - STEM education programs
- **University of Texas at Austin** - Network infrastructure hosting
- **Liberal Arts and Science Academy (LASA)** - Amateur radio club collaboration

## 🛠️ Website Technology

This website is built with [Astro](https://astro.build), a modern static site generator optimized for performance and developer experience.

### Project Structure

```text
/
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── assets/            # Optimized images and logos
│   │   └── images/        # Partner logos, photos, hero images
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Website pages
│   │   ├── index.astro           # Homepage
│   │   ├── learn.astro           # About Meshtastic & Austin Mesh
│   │   ├── join.astro            # How to join the network
│   │   ├── devices.astro         # Hardware recommendations
│   │   ├── coverage-map.astro    # Network coverage
│   │   ├── partners.astro        # Community partners
│   │   └── similar-networks.astro # Other mesh networks
│   └── styles/            # CSS stylesheets
└── package.json
```

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run Biome linter and formatter                    |
| `npm run lint:fix`        | Fix linting issues automatically                 |

## 🌐 How Meshtastic Works

Meshtastic creates a mesh network using LoRa (Long Range) radio technology on the 906.875 MHz frequency. Key features include:

### Communication Types
- **Primary Channel**: Unencrypted public messages visible to all users
- **Group Channels**: Encrypted messages for specific groups with shared keys
- **Direct Messages**: Private encrypted messages between individuals
- **Location Sharing**: Optional GPS location broadcasting
- **Telemetry Data**: Battery status, signal strength, and sensor data

### Network Benefits
- **No Infrastructure Required**: Works without cell towers, internet, or power grid
- **Self-Healing**: Messages automatically route through available nodes
- **Solar Powered**: Many nodes run indefinitely on solar power
- **Low Cost**: Hardware costs under $100 per node
- **Long Range**: Can communicate several miles between nodes

## 🎯 Getting Involved

### Join the Network
1. **Get Hardware**: Purchase a Meshtastic-compatible device ($35-$200)
2. **Download App**: Install the official Meshtastic app (iOS/Android)
3. **Connect**: Pair your device via Bluetooth
4. **Configure**: Follow our [best practices guide](/join/#best-practices)

### Join the Community
- **Discord**: Join our active [Discord server](https://discord.gg/6a5Sv2s9bG)
- **Meetings**: Attend quarterly in-person meetups in Austin
- **Email**: Subscribe to our mailing list at info@austinmesh.org
- **Social Media**: Follow us on [Instagram](https://www.instagram.com/p/Cq0jOpYLpZy/), [YouTube](https://youtube.com/channel/UCtFl5gdwv0SdrP8sHlDMKNA), and [Twitter](https://twitter.com/AustinMeshOrg)

### Support the Project
- **Install Nodes**: Set up solar-powered repeaters in your area
- **Partner with Us**: Schools and organizations can host infrastructure
- **Spread the Word**: Help us grow the Austin mesh community
- **Contribute**: Help with website development, documentation, or outreach

## 📚 Learning Resources

The website includes comprehensive educational content:

- **[Learn Page](/learn/)**: Complete introduction to Meshtastic and mesh networking
- **[ELI5 Guide](/learn/#eli5)**: Simple explanation for beginners
- **[Device Guide](/devices/)**: Hardware recommendations and solar builds
- **[Coverage Map](/coverage-map/)**: Current network coverage
- **[Similar Networks](/similar-networks/)**: Other mesh communities worldwide

## 🏗️ Contributing to the Website

This website is open source and welcomes contributions:

1. Fork the repository
2. Make your changes
3. Test locally with `npm run dev`
4. Submit a pull request

For major changes, please open an issue first to discuss your ideas.

## 📞 Contact

- **Email**: info@austinmesh.org
- **Discord**: https://discord.gg/6a5Sv2s9bG
- **Website**: https://austinmesh.org

## 📄 License

This website is open source. Austin Mesh is a community project dedicated to building resilient, decentralized communication infrastructure for Austin, Texas.
