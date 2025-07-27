// Mock database for demo purposes (since PostgreSQL is not available in web environment)
console.log('📝 Using mock database for demo purposes');

// Mock users storage
let mockUsers = [
  {
    id: 1,
    name: 'Demo User',
    email: 'demo@levelup.com',
    password: '$2a$10$example.hash.for.demo.purposes.only',
    test_completed: true,
    career_options: [
      {
        id: 1,
        title: 'Software Developer',
        description: 'Build applications and systems using various programming languages and frameworks.',
        score: 9.2,
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
        careers: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
        growth: 'Excellent growth prospects with 22% job growth expected over the next decade.'
      },
      {
        id: 2,
        title: 'Data Scientist',
        description: 'Analyze complex data to help organizations make informed business decisions.',
        score: 8.7,
        skills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization'],
        careers: ['Data Analyst', 'ML Engineer', 'Business Intelligence Analyst'],
        growth: 'Very strong growth with 35% job growth expected, much faster than average.'
      },
      {
        id: 3,
        title: 'UX/UI Designer',
        description: 'Design user-friendly interfaces and experiences for digital products.',
        score: 8.1,
        skills: ['Design Thinking', 'Prototyping', 'User Research', 'Figma', 'Adobe Creative Suite'],
        careers: ['UX Designer', 'UI Designer', 'Product Designer'],
        growth: 'Strong growth with 13% job growth expected over the next decade.'
      }
    ],
    xp_level: 150,
    profile_image: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

let nextUserId = 2;

// Mock database operations
const mockDb = {
  // Mock query function
  query: async (text, params = []) => {
    console.log('Mock DB Query:', text, params);
    
    // Handle different query types
    if (text.includes('SELECT * FROM users WHERE email')) {
      const email = params[0];
      const user = mockUsers.find(u => u.email === email);
      return { rows: user ? [user] : [] };
    }
    
    if (text.includes('SELECT * FROM users WHERE id')) {
      const id = params[0];
      const user = mockUsers.find(u => u.id === parseInt(id));
      return { rows: user ? [user] : [] };
    }
    
    if (text.includes('INSERT INTO users')) {
      const [name, email, hashedPassword] = params;
      const newUser = {
        id: nextUserId++,
        name,
        email,
        password: hashedPassword,
        test_completed: false,
        career_options: [],
        xp_level: 0,
        profile_image: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      mockUsers.push(newUser);
      return { rows: [newUser] };
    }
    
    if (text.includes('UPDATE users SET')) {
      // Handle user updates
      const userId = params[params.length - 1]; // Last parameter is usually the ID
      const userIndex = mockUsers.findIndex(u => u.id === parseInt(userId));
      
      if (userIndex !== -1) {
        // Update user based on query content
        if (text.includes('test_completed')) {
          mockUsers[userIndex].test_completed = true;
          mockUsers[userIndex].career_options = [
            {
              id: 1,
              title: 'Software Developer',
              description: 'Build applications and systems using various programming languages and frameworks.',
              score: 9.2,
              skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
              careers: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
              growth: 'Excellent growth prospects with 22% job growth expected over the next decade.'
            },
            {
              id: 2,
              title: 'Data Scientist',
              description: 'Analyze complex data to help organizations make informed business decisions.',
              score: 8.7,
              skills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization'],
              careers: ['Data Analyst', 'ML Engineer', 'Business Intelligence Analyst'],
              growth: 'Very strong growth with 35% job growth expected, much faster than average.'
            },
            {
              id: 3,
              title: 'UX/UI Designer',
              description: 'Design user-friendly interfaces and experiences for digital products.',
              score: 8.1,
              skills: ['Design Thinking', 'Prototyping', 'User Research', 'Figma', 'Adobe Creative Suite'],
              careers: ['UX Designer', 'UI Designer', 'Product Designer'],
              growth: 'Strong growth with 13% job growth expected over the next decade.'
            }
          ];
          mockUsers[userIndex].xp_level += 100;
        }
        mockUsers[userIndex].updated_at = new Date().toISOString();
        return { rows: [mockUsers[userIndex]] };
      }
    }
    
    return { rows: [] };
  },
  
  // Mock connect function
  connect: async () => {
    return {
      query: mockDb.query,
      release: () => {}
    };
  },

  // Mock event handlers for compatibility
  on: (event, callback) => {
    if (event === 'connect') {
      setTimeout(() => callback(), 100);
    }
  }
};

console.log('✅ Mock database initialized successfully');

module.exports = mockDb;
