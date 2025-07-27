import Navbar from "@/components/mycomponents/navbar";
import { ShinyText } from "@/components/lightswind/shiny-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import React from "react";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";

const page = () => {
  return (
    <div>
      <SmokeyCursor
        curl={10}
        splatForce={12000}
        densityDissipation={1.5}
        colorUpdateSpeed={20}
        backgroundColor={{ r: 0.8, g: 0.1, b: 0 }}
      />
      <Navbar />
      <div className="grid grid-cols-1 min-h-screen place-items-center">
        <ShinyText
          baseColor="rgba(255, 255, 255, 0.8)"
          shineColor="rgba(255, 255, 255, 1)"
          speed={2}
          size="4xl"
          className="mt-50 mb-30"
          weight="extrabold">
          WHO DO WE WORK WITH?
        </ShinyText>
        <MorphingText texts={texts} />
        <div className="mx-10 px-10 mt-30 mb-20 max-w-6xl space-y-4 text-gray-500 text-justify">
          <h1 className="text-center text-4xl font-bold text-gray-400 mb-10">
            Recruiting Interns
          </h1>
          <h1 className="text-center text-2xl font-bold text-gray-100">
            Data Science Internship [Neural Cognition Division]
          </h1>
          <ul>
            <li>Location: Remote (100% WFH)</li>
            <li>
              Type: Unpaid Internship Duration: 3 to 6 months (flexible start)
            </li>
            <li>
              Eligibility: Final-year undergraduate students in related fields
            </li>
          </ul>
          <h1 className="text-center text-xl font-bold text-gray-100">
            Internship Overview
          </h1>
          <ul>
            We are inviting final-year students to join our Data Science
            Internship Program to work on next-generation neural data pipelines.
            You will assist in building, cleaning, and preparing complex
            datasets derived from neuroscience experiments (EEG, fNIRS, MEG),
            emotional labels, and cognitive state measurements.
          </ul>
          <h1 className="text-center text-xl font-bold text-gray-100">
            Responsibilities
          </h1>
          <ul>
            <li>
              Handle, clean, and preprocess time-series neural data (EEG,
              eye-tracking, etc.)
            </li>
            <li>
              Design and optimize data pipelines for multimodal cognitive
              datasets
            </li>
            <li>
              Implement feature extraction techniques (e.g., DE, PSD, STFT,
              wavelets)
            </li>{" "}
            <li>Visualize brain data and emotional/cognitive states</li>{" "}
            <li>
              Assist in maintaining structured research codebases (Jupyter,
              Python modules)
            </li>
            <li>
              Collaborate with researchers on preparing datasets for machine
              learning tasks
            </li>
            <li>
              Help simulate synthetic neural data for training and testing
              purposes
            </li>
          </ul>
          <h1 className="text-center text-xl font-bold text-gray-100">
            Qualifications
          </h1>
          <ul>
            <span className="text-red-900">Required: </span>Final-year student
            in Computer Science, Data Science, Neuroscience, Biomedical
            Engineering, or related field. Basic understanding of medical or
            brain-related data (EEG, fNIRS, or physiology). Proficient in Python
            Familiarity with PyTorch and optionally PyTorch Geometric (PyG).
            Strong foundations in linear algebra, signal processing, and
            probability/statistics. Experience with pandas, NumPy, matplotlib,
            and data visualization tools.
            <br />
            <br />
            <span className="text-yellow-900">Nice to Have: "</span>
            Exposure to neural networks, KANs, or GNNs. Experience working with
            EEG datasets (SEED, DEAP, etc.). Git and collaborative workflow
            experience. Interest in machine cognition, neuro-AI, or cognitive
            neuroscience. Familiarity with Hugging Face, PyG, or graph-based ML
            libraries. Ability to read and summarize research papers.
          </ul>
          <h1 className="text-center text-xl font-bold text-gray-100">
            What You Will Gain
          </h1>
          <ul>
            This is an unpaid, research-focused internship for academic and
            career development. You can work entirely remotely, with async
            communication and weekly sync calls. Flexible working hours that
            suit your university schedule. Selected interns may be invited to
            contribute to publications or future funded projects.
          </ul>
          <h1 className="text-center text-xl font-bold text-gray-100">Notes</h1>
          <ul>
            Real-world experience in neural AI research Mentorship from
            researchers working on signal-based AI. Opportunity to contribute to
            experimental, high-impact projects Portfolio-building experience
            through structured tasks and deliverables. Potential future
            collaboration pathway. Access to internal knowledge resources and
            research pipelines.
          </ul>
          <h1 className="text-center text-xl font-bold text-gray-100">
            How to Apply
          </h1>
          <ul>
            <li>
              Send the following to{" "}
              <span className="text-white">contact@neuraif.com</span> with the
              subject line: “Data Science Internship Application – [Your Name]”
            </li>
            <li>Include: Brief introduction or cover letter</li>
            <li>Resume or CV</li>{" "}
            <li>GitHub or research/project portfolio (if any)</li>{" "}
            <li>Availability and preferred start date</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;

export const texts = [
  "Cognitive neuroscientists",
  "Computational neuroscientists",
  "AI researchers",
  "Generative artists",
  "Machine learning theorists",
  "Visionaries",
  "Mathematicians",
  "And More",
];
