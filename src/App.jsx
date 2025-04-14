import React, { useState } from 'react';

// Main App component
function App() {
  const [currentPage, setCurrentPage] = useState('Logic Gates'); // Manage current page

  // Navbar with buttons to navigate between pages
  // Navbar with buttons for navigation
const NavBar = () => (
  <nav style={{ marginBottom: "20px", textAlign: "left", padding: "20px", backgroundColor: "#f1f1f1", width: "100%" }}>
    <button onClick={() => setCurrentPage("Logic Gates")} style={buttonStyle}>
      Logic Gates
    </button>
    <button onClick={() => setCurrentPage("CMOS Guides")} style={buttonStyle}>
      CMOS Guides
    </button>
    <button onClick={() => setCurrentPage("FAQ")} style={buttonStyle}>
      FAQ
    </button>
    <button onClick={() => setCurrentPage("About")} style={buttonStyle}>
      About Us
    </button>
  </nav>
);


  // Subsection for logic gates
  const LogicGatesSection = () => (
    <div>
      {['AND', 'OR', 'NOT', 'XOR', 'NAND', 'NOR'].map(gate => (
        <button
          key={gate}
          onClick={() => setCurrentPage((gate = 'AND'))}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {`${gate} Gate`}
        </button>
      ))}
    </div>
  );

  // Subsection for CMOS
const CMOSGuidesSection = () => (
  <div>
    {["CMOS Inverter", "CMOS NAND", "CMOS NOR"].map((cmos) => (
      <button
        key={cmos}
        onClick={() => setCurrentPage(cmos)}
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "#FF9800",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {cmos}
      </button>
    ))}
  </div>
);


  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Logic Gates Tutorial</h1>
      <NavBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          {/* Conditionally render LogicGatesSection only on Logic Gates-related pages */}
          {(currentPage === 'Logic Gates' ||
            ['AND', 'OR', 'NOT', 'XOR', 'NAND', 'NOR'].includes(
              currentPage
            )) && <LogicGatesSection />}

          {/* Render content for each gate */}
          {currentPage === 'AND' && (
            <>
              <AndGate />
              <DetailedExplanation gate='AND' />
            </>
          )}
          {currentPage === 'OR' && (
            <>
              <OrGate />
              <DetailedExplanation gate='OR' />
            </>
          )}
          {currentPage === 'NOT' && (
            <>
              <NotGate />
              <DetailedExplanation gate='NOT' />
            </>
          )}
          {currentPage === 'XOR' && (
            <>
              <XorGate />
              <DetailedExplanation gate='XOR' />
            </>
          )}
          {currentPage === 'NAND' && (
            <>
              <NandGate />
              <DetailedExplanation gate='NAND' />
            </>
          )}
          {currentPage === 'NOR' && (
            <>
              <NorGate />
              <DetailedExplanation gate='NOR' />
            </>
          )}

           {/* Render CMOS Guides Section */}
          {currentPage === "CMOS Guides" && <CMOSGuidesSection />}
          
          {/* Detailed explanation for each CMOS concept */}
          {currentPage === "CMOS Inverter" && (
            <>
              <CMOSExplanation topic="CMOS Inverter" />
            </>
          )}
          {currentPage === "CMOS NAND" && (
            <>
              <CMOSExplanation topic="CMOS NAND" />
            </>
          )}
          {currentPage === "CMOS NOR" && (
            <>
              <CMOSExplanation topic="CMOS NOR" />
            </>
          )}

          {/* Render FAQ and About pages without showing the gate options */}
          {currentPage === 'FAQ' && <FAQ />}
          {currentPage === 'About' && <About />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Component to display an explanation for each gate
function Explanation({ description }) {
  return (
    <p style={{ maxWidth: '500px', margin: '20px auto', fontSize: '16px' }}>
      {description}
    </p>
  );
}

function DetailedExplanation({ gate }) {
  const explanations = {
    AND: `The AND gate is a fundamental logic gate that outputs true (1) only when both of its inputs are true. If either input is false, the output will be false (0).
    
    In CMOS (Complementary Metal-Oxide-Semiconductor) technology, the AND gate is constructed using both PMOS and NMOS transistors. The key principle behind CMOS logic gates is that the PMOS transistors conduct when the input is low (0), and NMOS transistors conduct when the input is high (1).
    
    To implement the AND gate, two PMOS transistors are connected in parallel, and two NMOS transistors are connected in series. This structure ensures that the output is pulled high only when both inputs are true, making the AND gate ideal for combining conditions in logical circuits. The use of CMOS provides advantages such as low power consumption and high noise immunity, which makes it a popular choice for building digital circuits.`,

    OR: `The OR gate outputs true (1) if at least one of its inputs is true. If both inputs are false, the output will be false.
    
    In CMOS technology, the OR gate is implemented using PMOS and NMOS transistors. For the OR gate, the PMOS transistors are placed in series, while the NMOS transistors are placed in parallel. This arrangement allows the output to be pulled high when at least one input is true. The combination of transistors ensures that the output is correctly generated for all input combinations. The advantage of using CMOS to construct the OR gate is that it maintains low power consumption while ensuring robust performance.`,

    NOT: `The NOT gate, also known as an inverter, outputs the opposite of its input. If the input is true (1), the output will be false (0), and if the input is false, the output will be true.
    
    The NOT gate is one of the simplest gates to implement in CMOS. It consists of a single PMOS transistor and a single NMOS transistor connected in a complementary fashion. When the input is low (0), the PMOS transistor conducts, and the NMOS transistor is off, resulting in a high output. Conversely, when the input is high (1), the NMOS transistor conducts, and the PMOS is off, producing a low output. This simplicity and efficiency make the NOT gate essential in building more complex logic circuits.`,

    XOR: `The XOR gate, or "exclusive OR" gate, outputs true only if the two inputs are different. If both inputs are the same, the output will be false.
    
    The XOR gate is more complex to implement in CMOS compared to the basic AND, OR, and NOT gates. It typically requires a combination of both NMOS and PMOS transistors arranged in multiple stages. XOR gates are crucial in circuits such as adders, where the difference between two signals needs to be detected. The unique functionality of XOR makes it valuable in arithmetic circuits, especially when calculating sums in binary addition.`,

    NAND: `The NAND gate is essentially an AND gate followed by a NOT gate. It outputs false (0) only when both inputs are true. In all other cases, the output is true (1).
    
    In CMOS, the NAND gate is implemented by connecting two PMOS transistors in parallel and two NMOS transistors in series. The output is pulled low only when both inputs are high, which deactivates the NMOS network and pulls the output down. This behavior is widely used in various logic circuits, as the NAND gate is a universal gate, meaning any other logic gate can be constructed using combinations of NAND gates.`,

    NOR: `The NOR gate is the combination of an OR gate followed by a NOT gate. It outputs true (1) only when both inputs are false.
    
    In CMOS, the NOR gate uses two PMOS transistors in series and two NMOS transistors in parallel. When both inputs are low, the output is pulled high by the PMOS transistors. If either input is high, the NMOS transistors conduct, pulling the output low. Like the NAND gate, the NOR gate is also a universal gate and can be used to construct any other logic gate through combinations of NOR gates.`,
  };

  return (
    <p style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'left' }}>
      {explanations[gate]}
    </p>
  );
}

// Component to display detailed explanations for CMOS-related concepts
function CMOSExplanation({ topic }) {
  const explanations = {
    "CMOS Inverter": `The CMOS inverter is one of the most fundamental components in digital logic design. It consists of a PMOS and an NMOS transistor in a complementary configuration. 
    When the input is low (0), the PMOS is on and the NMOS is off, resulting in a high output (1). When the input is high (1), the NMOS is on and the PMOS is off, resulting in a low output (0). 
    This complementary action is the basis for the efficiency of CMOS circuits, providing low power consumption and robust noise immunity.`,
    
    "CMOS NAND": `The CMOS NAND gate is constructed using a combination of PMOS and NMOS transistors. In the NAND gate, two PMOS transistors are placed in parallel, and two NMOS transistors are placed in series. 
    When both inputs are high (1), the NMOS transistors conduct, pulling the output low. For any other combination of inputs, the PMOS transistors ensure that the output remains high. The CMOS NAND gate is commonly used in digital circuits due to its simplicity and low power consumption.`,
    
    "CMOS NOR": `The CMOS NOR gate is another basic building block of digital logic. In the NOR gate, two PMOS transistors are placed in series, and two NMOS transistors are placed in parallel. 
    The output is low if either of the inputs is high, as the NMOS network conducts and pulls the output down. If both inputs are low, the PMOS transistors conduct and pull the output high. Like the NAND gate, the NOR gate can be used to build any other logic gate, making it a universal gate in digital logic design.`,
  };

  return <p style={{ maxWidth: "600px", margin: "20px auto", textAlign: "left" }}>{explanations[topic]}</p>;
}

// FAQ Page Component
function FAQ() {
  return (
    <div style={{ maxWidth: '600px', textAlign: 'left', padding: '20px' }}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>What is a logic gate?</strong>
          <p>
            A logic gate is a basic building block of a digital circuit. It
            performs a logical operation on one or more input signals and
            produces a single output signal.
          </p>
        </li>
        <li>
          <strong>Why are logic gates important?</strong>
          <p>
            Logic gates are fundamental in computing. They are used in
            everything from simple circuits to complex computer processors.
          </p>
        </li>
        <li>
          <strong>What are the basic logic gates?</strong>
          <p>
            The basic logic gates include AND, OR, NOT, XOR, NAND, and NOR
            gates.
          </p>
        </li>
        <li>
          <strong>Can I simulate more gates?</strong>
          <p>
            Yes! Use the provided simulator to toggle inputs for each gate and
            observe the outputs.
          </p>
        </li>
        <li>
          <strong>I still have questions!!</strong>
          <p>
            Of course! Feel free to send us an email if you have any burning
            problems, or if you spot a mistake on the site.
          </p>
        </li>
      </ul>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div style={{ maxWidth: '600px', textAlign: 'left', padding: '20px' }}>
      <h2>About Us</h2>
      <p>
        This website was created as an educational resource to help learners
        understand the fundamental concepts of logic gates and how they work.
        Each logic gate is represented with an interactive simulation, truth
        table, and explanation.
      </p>
      <p>
        Our goal is to provide a user-friendly platform for anyone interested in
        learning more about digital logic and electronics. Whether you're a
        beginner or an advanced student, we hope this tool helps you better
        understand how digital circuits work.
      </p>
      <p>
        For any questions or feedback, feel free to reach out to us via the
        contact details provided in the footer below.
      </p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        width: '100%',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        position: 'sticky',
        bottom: '0',
      }}
    >
      <p>
        &copy; 2024 Logic Gates Tutorial | Follow us on:
        <a
          href='https://facebook.com'
          target='_blank'
          style={{ margin: '0 10px' }}
        >
          Facebook
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          style={{ margin: '0 10px' }}
        >
          Twitter
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          style={{ margin: '0 10px' }}
        >
          Instagram
        </a>
      </p>
      <p>
        Contact us:{' '}
        <a href='mailto:info@logicgatestutorial.com'>
          info@logicgatestutorial.com
        </a>
      </p>
    </footer>
  );
}

// AND Gate Component
function AndGate() {
  const [inputs, setInputs] = useState([false, false]);

  const handleInputChange = index => {
    const newInputs = [...inputs];
    newInputs[index] = !newInputs[index];
    setInputs(newInputs);
  };

  return (
    <div>
      <LogicGate
        title='AND'
        inputs={inputs}
        truthTable={[
          { inputs: [false, false], output: false },
          { inputs: [false, true], output: false },
          { inputs: [true, false], output: false },
          { inputs: [true, true], output: true },
        ]}
        handleInputChange={handleInputChange}
        Symbol={AndGateSymbol}
      />
    </div>
  );
}

// OR Gate Component
function OrGate() {
  const [inputs, setInputs] = useState([false, false]);

  const handleInputChange = index => {
    const newInputs = [...inputs];
    newInputs[index] = !newInputs[index];
    setInputs(newInputs);
  };

  return (
    <div>
      <LogicGate
        title='OR'
        inputs={inputs}
        truthTable={[
          { inputs: [false, false], output: false },
          { inputs: [false, true], output: true },
          { inputs: [true, false], output: true },
          { inputs: [true, true], output: true },
        ]}
        handleInputChange={handleInputChange}
        Symbol={OrGateSymbol}
      />
    </div>
  );
}

// NOT Gate Component
function NotGate() {
  const [input, setInput] = useState(false);

  return (
    <div>
      <LogicGate
        title='NOT'
        inputs={[input]}
        truthTable={[
          { inputs: [false], output: true },
          { inputs: [true], output: false },
        ]}
        handleInputChange={() => setInput(!input)}
        Symbol={NotGateSymbol}
      />
    </div>
  );
}

// XOR Gate Component
function XorGate() {
  const [inputs, setInputs] = useState([false, false]);

  const handleInputChange = index => {
    const newInputs = [...inputs];
    newInputs[index] = !newInputs[index];
    setInputs(newInputs);
  };

  return (
    <div>
      <LogicGate
        title='XOR'
        inputs={inputs}
        truthTable={[
          { inputs: [false, false], output: false },
          { inputs: [false, true], output: true },
          { inputs: [true, false], output: true },
          { inputs: [true, true], output: false },
        ]}
        handleInputChange={handleInputChange}
        Symbol={XorGateSymbol}
      />
    </div>
  );
}

// NAND Gate Component
function NandGate() {
  const [inputs, setInputs] = useState([false, false]);

  const handleInputChange = index => {
    const newInputs = [...inputs];
    newInputs[index] = !newInputs[index];
    setInputs(newInputs);
  };

  return (
    <div>
      <LogicGate
        title='NAND'
        inputs={inputs}
        truthTable={[
          { inputs: [false, false], output: true },
          { inputs: [false, true], output: true },
          { inputs: [true, false], output: true },
          { inputs: [true, true], output: false },
        ]}
        handleInputChange={handleInputChange}
        Symbol={NandGateSymbol}
      />
    </div>
  );
}

// NOR Gate Component
function NorGate() {
  const [inputs, setInputs] = useState([false, false]);

  const handleInputChange = index => {
    const newInputs = [...inputs];
    newInputs[index] = !newInputs[index];
    setInputs(newInputs);
  };

  return (
    <div>
      <LogicGate
        title='NOR'
        inputs={inputs}
        truthTable={[
          { inputs: [false, false], output: true },
          { inputs: [false, true], output: false },
          { inputs: [true, false], output: false },
          { inputs: [true, true], output: false },
        ]}
        handleInputChange={handleInputChange}
        Symbol={NorGateSymbol}
      />
    </div>
  );
}

// LogicGate Component (Shared by all gates)
function LogicGate({ title, inputs, truthTable, handleInputChange, Symbol }) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h3>{title} Gate</h3>
      <Symbol />
      <div style={{ margin: '20px 0' }}>
        {inputs.map((input, i) => (
          <label key={i} style={{ margin: '0 10px' }}>
            <input
              type='checkbox'
              checked={input}
              onChange={() => handleInputChange(i)}
            />{' '}
            Input {i + 1}
          </label>
        ))}
      </div>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '300px',
          marginTop: '10px',
        }}
      >
        <thead>
          <tr>
            {inputs.map((_, i) => (
              <th key={i} style={{ border: '1px solid #ccc', padding: '5px' }}>
                Input {i + 1}
              </th>
            ))}
            <th style={{ border: '1px solid #ccc', padding: '5px' }}>Output</th>
          </tr>
        </thead>
        <tbody>
          {truthTable.map((row, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: row.inputs.every((val, i) => val === inputs[i])
                  ? '#dff0d8'
                  : 'white',
                border: '1px solid #ccc',
              }}
            >
              {row.inputs.map((input, i) => (
                <td
                  key={i}
                  style={{ border: '1px solid #ccc', padding: '5px' }}
                >
                  {input ? '1' : '0'}
                </td>
              ))}
              <td style={{ border: '1px solid #ccc', padding: '5px' }}>
                {row.output ? '1' : '0'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// AND Gate SVG Symbol
function AndGateSymbol() {
  return (
    <svg width='100' height='50' viewBox='0 0 100 50'>
      <path
        d='M 10 10 Q 50 10 50 25 Q 50 40 10 40 L 10 10 Z'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <line x1='0' y1='20' x2='10' y2='20' stroke='black' strokeWidth='2' />
      <line x1='0' y1='30' x2='10' y2='30' stroke='black' strokeWidth='2' />
      <line x1='50' y1='25' x2='60' y2='25' stroke='black' strokeWidth='2' />
    </svg>
  );
}

// OR Gate SVG Symbol
function OrGateSymbol() {
  return (
    <svg width='100' height='50' viewBox='0 0 100 50'>
      <path
        d='M 10 10 Q 50 0 90 25 Q 50 50 10 40 L 20 25 Z'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <line x1='0' y1='20' x2='10' y2='20' stroke='black' strokeWidth='2' />
      <line x1='0' y1='30' x2='10' y2='30' stroke='black' strokeWidth='2' />
      <line x1='90' y1='25' x2='100' y2='25' stroke='black' strokeWidth='2' />
    </svg>
  );
}

// NOT Gate SVG Symbol
function NotGateSymbol() {
  return (
    <svg width='100' height='50' viewBox='0 0 100 50'>
      <polygon
        points='10,10 80,25 10,40'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <circle
        cx='85'
        cy='25'
        r='5'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <line x1='0' y1='25' x2='10' y2='25' stroke='black' strokeWidth='2' />
      <line x1='90' y1='25' x2='100' y2='25' stroke='black' strokeWidth='2' />
    </svg>
  );
}

// XOR Gate SVG Symbol
function XorGateSymbol() {
  return (
    <svg width='100' height='50' viewBox='0 0 100 50'>
      <path
        d='M 10 10 Q 50 0 90 25 Q 50 50 10 40 L 20 25 Z'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <path
        d='M 5 10 Q 45 0 85 25 Q 45 50 5 40'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <line x1='0' y1='20' x2='10' y2='20' stroke='black' strokeWidth='2' />
      <line x1='0' y1='30' x2='10' y2='30' stroke='black' strokeWidth='2' />
      <line x1='90' y1='25' x2='100' y2='25' stroke='black' strokeWidth='2' />
    </svg>
  );
}

// NAND Gate SVG Symbol
function NandGateSymbol() {
  return (
    <svg width='100' height='50' viewBox='0 0 100 50'>
      <path
        d='M 10 10 Q 50 0 90 25 Q 50 50 10 40 Z'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <circle
        cx='92'
        cy='25'
        r='5'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <line x1='0' y1='20' x2='10' y2='20' stroke='black' strokeWidth='2' />
      <line x1='0' y1='30' x2='10' y2='30' stroke='black' strokeWidth='2' />
      <line x1='97' y1='25' x2='100' y2='25' stroke='black' strokeWidth='2' />
    </svg>
  );
}

// NOR Gate SVG Symbol
function NorGateSymbol() {
  return (
    <svg width='100' height='50' viewBox='0 0 100 50'>
      <path
        d='M 10 10 Q 50 0 90 25 Q 50 50 10 40 L 20 25 Z'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <circle
        cx='92'
        cy='25'
        r='5'
        stroke='black'
        strokeWidth='2'
        fill='none'
      />
      <line x1='0' y1='20' x2='10' y2='20' stroke='black' strokeWidth='2' />
      <line x1='0' y1='30' x2='10' y2='30' stroke='black' strokeWidth='2' />
      <line x1='97' y1='25' x2='100' y2='25' stroke='black' strokeWidth='2' />
    </svg>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
