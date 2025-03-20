import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
import TestimonialCard from "./components/TestimonialCard";
import { ExperienceText } from "./components/ExperienceRotatingText";
import SriLankaSection from "./components/SriLankaSection";
import IGTaOpportunities from "./components/IGTaOpportunities";
import IGVOpportunities from "./components/iGVOpportunities";
import IGTeOpportunities from "./components/IGTeOpportunities";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "qtdCkL4bVZJtCuXw4vJ3HS",
      token: "1aqEejS5xFIaCW8pfjVF9VbQHAZvV184Iwl9O8hcjOVBzkKibKtzk46Mj0lO010uZUPUgFUKqWq5hM1OLLA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});

PLASMIC.registerComponent(TestimonialCard, {
  name: 'TestimonialCard',
  props: {
    children: 'slot'
  }
});

PLASMIC.registerComponent(ExperienceText, {
  name: 'ExperienceText',
  props: {}
});

PLASMIC.registerComponent(SriLankaSection
  , {
  name: 'SriLankaSection',
  props: {}
});

PLASMIC.registerComponent(IGTaOpportunities
  , {
  name: 'IGTaOpportunities',
  props: {}
});

PLASMIC.registerComponent(IGVOpportunities
  , {
  name: 'IGVOpportunities',
  props: {}
});

PLASMIC.registerComponent(IGTeOpportunities
  , {
  name: 'IGTeOpportunities',
  props: {}
});