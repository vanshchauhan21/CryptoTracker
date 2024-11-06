import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const nodeStyles = { 
    borderRadius: 10, 
    padding: 10, 
    background: '#fff', 
    border: '1px solid #ddd' 
  };
  const skyBlueStyle = { 
    borderRadius: 10, 
    padding: 10, 
    background: '#87CEEB', 
    border: '1px solid #ddd' 
  };
  

  const parentnodeStyles = { 
    borderRadius: 10, 
    padding: 10, 
    background: '#F9F018', 
    border: '1px solid #ddd' 
  };
  const Nodes = [
    // Main Heading Node - Centered
    { id: '1', data: { label: 'Cryptocurrency Roadmap' }, position: { x: 500, y: 0 }, style: parentnodeStyles },
  
    // Step 1: Security
    { id: '2', data: { label: 'Step 1: Security' }, position: { x: -300, y: 100 }, style: skyBlueStyle },
    { id: '2a', data: { label: 'Account: Use a Separate Bank Account' }, position: { x: -450, y: 200 }, style: nodeStyles },
    { id: '2b', data: { label: 'Password: Use a Secure Password' }, position: { x: -300, y: 200 }, style: nodeStyles },
    { id: '2c', data: { label: '2-Factor Authentication' }, position: { x: -150, y: 200 }, style: nodeStyles },
  
    // Step 1: Subcomponents - Account
    { id: '2a1', data: { label: 'To separate finances and reduce risk.' }, position: { x: -450, y: 300 }, style: nodeStyles },
  
    // Step 1: Subcomponents - Password
    { id: '2b1', data: { label: 'To protect against unauthorized access.' }, position: { x: -300, y: 300 }, style: nodeStyles },
  
    // Step 1: Subcomponents - 2FA
    { id: '2c1', data: { label: 'To ensure extra protection from unauthorized access.' }, position: { x: -150, y: 300 }, style: nodeStyles },
  
    // Step 2: Choosing a Wallet
    { id: '3', data: { label: 'Step 2: Choosing a Wallet' }, position: { x: 100, y: 100 }, style: skyBlueStyle },
    { id: '3a', data: { label: 'Hardware Wallet: More secure but less convenient' }, position: { x: 40, y: 200 }, style: nodeStyles },
    { id: '3b', data: { label: 'Software Wallet: Easier access but slightly less secure' }, position: { x: 200, y: 200 }, style: nodeStyles },
    
    // Step 2: Subcomponents - Hardware Wallet
    { id: '3a1', data: { label: 'Ideal for long-term storage' }, position: { x: 40, y: 300 }, style: nodeStyles },
    
    // Step 2: Subcomponents - Software Wallet
    { id: '3b1', data: { label: 'Convenient for daily transactions' }, position: { x: 200, y: 300 }, style: nodeStyles },
    {
        id: '4',
        data: { label: 'Buy Your First Cryptocurrency' },
        position: { x: 500, y: 100 },
        style: skyBlueStyle
      },
      
      // Subcomponent 1: Exchange vs Peer-to-Peer
      {
        id: '4a',
        data: { label: ' Exchange vs Peer-to-Peer' },
        position: { x: 600, y: 200 },
        style: nodeStyles,
      },
      {
        id: '4a1',
        data: { label: 'Exchange (Recommended for Beginners)' },
        position: { x: 550, y: 550 },
        style: nodeStyles,
      },
      {
        id: '4b1',
        data: { label: 'Peer-to-Peer (Lower Fees, More Flexibility)' },
        position: { x: 700, y: 550 },
        style: nodeStyles,
      },
      
      // Subcomponent 2: Coinbase (Main Platform)
      {
        id: '4c',
        data: { label: ' Buy Cryptocurrency from Coinbase' },
        position: { x: 400, y: 200 },
        style: nodeStyles,
      },
      {
        id: '4c1',
        data: { label: 'Buy with Credit Card' },
        position: { x: 200, y: 550 },
        style: nodeStyles,
      },
      {
        id: '4c2',
        data: { label: 'Buy with Bank Account' },
        position: { x: 400, y: 550 },
        style: nodeStyles,
      },
      
      // Sub-subcomponent 1: Advantages of Buying with Credit Card
      {
        id: '4c1a',
        data: { label: 'Instant Transactions , Reward Points and Cashback' },
        position: { x: -50, y: 650 },
        style: nodeStyles,
      },
   
      // Sub-subcomponent 2: Disadvantages of Buying with Credit Card
      {
        id: '4c1d',
        data: { label: 'High Fees, Potential for Debt Accumulation' },
        position: { x: 140, y: 650 },
        style: nodeStyles,
      },
     

      
      // Sub-subcomponent 3: Advantages of Buying with Bank Account
      {
        id: '4c2a',
        data: { label: 'Lower Fees, Higher Purchase Limits' },
        position: { x: 300, y: 650 },
        style: nodeStyles,
      },
    
     
      
      // Sub-subcomponent 4: Disadvantages of Buying with Bank Account
      {
        id: '4c2d',
        data: { label: 'Slower Processing Times, Potential for Fraud or Account Theft' },
        position: { x: 450, y: 650 },
        style: nodeStyles,
      },
   
  
      
      // Optional: Alternative Methods for Buying Cryptocurrency
      {
        id: '4e',
        data: { label: 'Consider Alternative Methods: Bitcoin ATMs, Local Exchanges' },
        position: { x: 500, y: 350 },
        style: nodeStyles,
      },
      
  
    // Step 4: Trading and Storing Safely
    { id: '5', data: { label: 'Step 4: Trading and Storing Safely' }, position: { x: 900, y: 100 }, style: skyBlueStyle },
    { id: '5a', data: { label: 'Use a Secure Exchange for Trading' }, position: { x: 850, y: 200 }, style: nodeStyles },
    { id: '5b', data: { label: 'Store Crypto in a Secure Wallet' }, position: { x: 1000, y: 200 }, style: nodeStyles },
  
    // Step 4: Subcomponents - Secure Exchange
    { id: '5a1', data: { label: 'Look for exchanges with strong security features' }, position: { x: 850, y: 300 }, style: nodeStyles },
  
    // Step 4: Subcomponents - Secure Wallet
    { id: '5b1', data: { label: 'Cold storage wallets are the safest' }, position: { x: 1000, y: 300 }, style: nodeStyles },
  
    // Step 5: Growing Your Crypto Portfolio
    { id: '6', data: { label: 'Step 5: Growing Your Crypto Portfolio' }, position: { x: 1300, y: 100 }, style: skyBlueStyle},
    { id: '6a', data: { label: 'Diversify: Invest in different types of cryptocurrencies' }, position: { x: 1200, y: 200 }, style: nodeStyles },
    { id: '6b', data: { label: 'Staking: Earn rewards for holding certain cryptocurrencies' }, position: { x: 1400, y: 200 }, style: nodeStyles },
  
    // Step 5: Subcomponents - Diversify
    { id: '6a1', data: { label: 'Helps minimize risk' }, position: { x: 1200, y: 300 }, style: nodeStyles },
  
    // Step 5: Subcomponents - Staking
    { id: '6b1', data: { label: 'Earn passive income' }, position: { x: 1400, y: 300 }, style: nodeStyles },
  ];
  
  const Edges = [
    // Connect main heading to all steps
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#222' }},
    { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#222' }},
    { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#222' }},
    { id: 'e1-5', source: '1', target: '5', animated: true, style: { stroke: '#222' }},
    { id: 'e1-6', source: '1', target: '6', animated: true, style: { stroke: '#222' }},
  
    // Connect step 1 to its subcomponents (Security)
    { id: 'e2-2a', source: '2', target: '2a', animated: true, style: { stroke: '#222' }},
    { id: 'e2-2b', source: '2', target: '2b', animated: true, style: { stroke: '#222' }},
    { id: 'e2-2c', source: '2', target: '2c', animated: true, style: { stroke: '#222' }},
    
    // Connect subcomponents of Step 1 (Account, Password, and 2FA) to their "Why" explanations
    { id: 'e2a-2a1', source: '2a', target: '2a1', animated: true, style: { stroke: '#222' }, label: 'Why? ' },
    { id: 'e2b-2b1', source: '2b', target: '2b1', animated: true, style: { stroke: '#222' }, label: 'Why? ' },
    { id: 'e2c-2c1', source: '2c', target: '2c1', animated: true, style: { stroke: '#222' }, label: 'Why? ' },
  
    // Connect Step 2 to its subcomponents (Choosing a Wallet)
    { id: 'e3-3a', source: '3', target: '3a', animated: true, style: { stroke: '#222' }},
    { id: 'e3-3b', source: '3', target: '3b', animated: true, style: { stroke: '#222' }},
    
    // Connect subcomponents of Step 2 to their "Why" explanations
    { id: 'e3a-3a1', source: '3a', target: '3a1', animated: true, style: { stroke: '#222' }},
    { id: 'e3b-3b1', source: '3b', target: '3b1', animated: true, style: { stroke: '#222' }},
  
 // Connect Step 3 to its main subcomponents
{ id: 'e4-4a', source: '4', target: '4a', animated: true, style: { stroke: '#222' } },
{ id: 'e4-4c', source: '4', target: '4c', animated: true, style: { stroke: '#222' } },

// Connect subcomponents of Exchange vs Peer-to-Peer to their explanations
{ id: 'e4a-4a1', source: '4a', target: '4a1', animated: true, style: { stroke: '#222' } },
{ id: 'e4a-4b1', source: '4a', target: '4b1', animated: true, style: { stroke: '#222' } },

// Connect subcomponents of Coinbase to Credit Card and Bank Account options
{ id: 'e4c-4c1', source: '4c', target: '4c1', animated: true, style: { stroke: '#222' } },
{ id: 'e4c-4c2', source: '4c', target: '4c2', animated: true, style: { stroke: '#222' } },

// Connect advantages and disadvantages for Credit Card
{ id: 'e4c1-4c1a', source: '4c1', target: '4c1a', animated: true, style: { stroke: '#222' } ,label: 'Advantage'},
{ id: 'e4c1-4c1d', source: '4c1', target: '4c1d', animated: true, style: { stroke: '#222' } ,label: 'Disdvantage'},
{ id: 'e4c1a-4c1a1', source: '4c1a', target: '4c1a1', animated: true, style: { stroke: '#222' } },
{ id: 'e4c1a-4c1a2', source: '4c1a', target: '4c1a2', animated: true, style: { stroke: '#222' } },
{ id: 'e4c1d-4c1d1', source: '4c1d', target: '4c1d1', animated: true, style: { stroke: '#222' } },
{ id: 'e4c1d-4c1d2', source: '4c1d', target: '4c1d2', animated: true, style: { stroke: '#222' } },

// Connect advantages and disadvantages for Bank Account
{ id: 'e4c2-4c2a', source: '4c2', target: '4c2a', animated: true, style: { stroke: '#222' } ,label: 'Advantage'},
{ id: 'e4c2-4c2d', source: '4c2', target: '4c2d', animated: true, style: { stroke: '#222' } ,label: 'Disadvantage'},
{ id: 'e4c2a-4c2a1', source: '4c2a', target: '4c2a1', animated: true, style: { stroke: '#222' } },
{ id: 'e4c2a-4c2a2', source: '4c2a', target: '4c2a2', animated: true, style: { stroke: '#222' } },
{ id: 'e4c2d-4c2d1', source: '4c2d', target: '4c2d1', animated: true, style: { stroke: '#222' } },
{ id: 'e4c2d-4c2d2', source: '4c2d', target: '4c2d2', animated: true, style: { stroke: '#222' } },

// Optional: Alternative Methods
{ id: 'e4-4e', source: '4', target: '4e', animated: true, style: { stroke: '#222' } },

    // Connect Step 4 to its subcomponents (Trading and Storing)
    { id: 'e5-5a', source: '5', target: '5a', animated: true, style: { stroke: '#222' }},
    { id: 'e5-5b', source: '5', target: '5b', animated: true, style: { stroke: '#222' }},
    
    // Connect subcomponents of Step 4 to their "Why" explanations
    { id: 'e5a-5a1', source: '5a', target: '5a1', animated: true, style: { stroke: '#222' }},
    { id: 'e5b-5b1', source: '5b', target: '5b1', animated: true, style: { stroke: '#222' }},
  
    // Connect Step 5 to its subcomponents (Growing Portfolio)
    { id: 'e6-6a', source: '6', target: '6a', animated: true, style: { stroke: '#222' }},
    { id: 'e6-6b', source: '6', target: '6b', animated: true, style: { stroke: '#222' }},
    
    // Connect subcomponents of Step 5 to their "Why" explanations
    { id: 'e6a-6a1', source: '6a', target: '6a1', animated: true, style: { stroke: '#222' }},
    { id: 'e6b-6b1', source: '6b', target: '6b1', animated: true, style: { stroke: '#222' }},

    // Connect Step 3 to Coinbase
  { id: 'e4-4c', source: '4', target: '4c', animated: true, style: { stroke: '#222' } },

  // Connect Coinbase to Credit Card and Bank Account
  { id: 'e4c-4c1', source: '4c', target: '4c1', animated: true, style: { stroke: '#222' } },
  { id: 'e4c-4c2', source: '4c', target: '4c2', animated: true, style: { stroke: '#222' } },

  // Connect Credit Card to Advantages and Disadvantages
  { id: 'e4c1-4c1a', source: '4c1', target: '4c1a', animated: true, style: { stroke: '#222' } },
  { id: 'e4c1-4c1d', source: '4c1', target: '4c1d', animated: true, style: { stroke: '#222' } },

  // Connect Bank Account to Advantages and Disadvantages
  { id: 'e4c2-4c2a', source: '4c2', target: '4c2a', animated: true, style: { stroke: '#222' } },
  { id: 'e4c2-4c2d', source: '4c2', target: '4c2d', animated: true, style: { stroke: '#222' } },

  // Advantages to Subcomponents
  { id: 'e4c1a-4c1a1', source: '4c1a', target: '4c1a1', animated: true, style: { stroke: '#222' } },
  { id: 'e4c1a-4c1a2', source: '4c1a', target: '4c1a2', animated: true, style: { stroke: '#222' } },

  // Disadvantages to Subcomponents
  { id: 'e4c1d-4c1d1', source: '4c1d', target: '4c1d1', animated: true, style: { stroke: '#222' } },
  { id: 'e4c1d-4c1d2', source: '4c1d', target: '4c1d2', animated: true, style: { stroke: '#222' } },

  // Advantages to Subcomponents
  { id: 'e4c2a-4c2a1', source: '4c2a', target: '4c2a1', animated: true, style: { stroke: '#222' } },
  { id: 'e4c2a-4c2a2', source: '4c2a', target: '4c2a2', animated: true, style: { stroke: '#222' } },

  // Disadvantages to Subcomponents
  { id: 'e4c2d-4c2d1', source: '4c2d', target: '4c2d1', animated: true, style: { stroke: '#222' } },
  { id: 'e4c2d-4c2d2', source: '4c2d', target: '4c2d2', animated: true, style: { stroke: '#222' } },
  ];
  
  
function Roadmap() {
  const [nodes] = useState(Nodes);
  const [edges] = useState(Edges);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        style={{ background: '#F0F0F0' }}
        defaultZoom={1}
        defaultPosition={[0, 0]}
        nodesDraggable={false}
        nodesConnectable={false}
        paneMoveable={true}
        zoomOnScroll={false}
      >
        <MiniMap nodeStrokeColor={(n) => (n.type === 'input' ? '#0041d0' : '#ff0072')} />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default Roadmap;
