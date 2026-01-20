const data = {
  employees: [
    {
      id: 1,
      name: "John Smith",
      firstName: "John",
      email: "employee1@example.com",
      password: "123",
      taskStats: {
        total: 3,
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          id: 1,
          title: "Design Login Page",
          date: "2026-01-05",
          description: "Create a modern login page UI using Tailwind CSS.",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Fix Navbar Bug",
          date: "2026-01-06",
          description: "Resolve alignment issues in the navbar on mobile devices.",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          id: 3,
          title: "Update User Documentation",
          date: "2026-01-02",
          description: "Update onboarding documentation for new users.",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      name: "Emily Johnson",
      firstName: "Emily",
      email: "employee2@example.com",
      password: "123",
      taskStats: {
        total: 4,
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          id: 1,
          title: "Build Dashboard Cards",
          date: "2026-01-07",
          description: "Create responsive dashboard statistic cards.",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Optimize Images",
          date: "2026-01-03",
          description: "Compress and optimize images for faster load time.",
          category: "Performance",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 3,
          title: "Fix API Error Handling",
          date: "2026-01-04",
          description: "Improve error handling for failed API responses.",
          category: "Backend",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          id: 4,
          title: "Refactor CSS",
          date: "2026-01-08",
          description: "Clean and refactor legacy CSS styles.",
          category: "Maintenance",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      name: "Michael Brown",
      firstName: "Michael",
      email: "employee3@example.com",
      password: "123",
      taskStats: {
        total: 5,
        active: 3,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          id: 1,
          title: "Create Landing Page",
          date: "2026-01-09",
          description: "Design and implement landing page layout.",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Integrate Payment Gateway",
          date: "2026-01-10",
          description: "Integrate Stripe payment gateway.",
          category: "Backend",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          id: 3,
          title: "Write Unit Tests",
          date: "2026-01-05",
          description: "Add unit tests for core components.",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 4,
          title: "Fix Deployment Issue",
          date: "2026-01-06",
          description: "Resolve production deployment failure.",
          category: "DevOps",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          id: 5,
          title: "Improve Accessibility",
          date: "2026-01-11",
          description: "Enhance accessibility for screen readers.",
          category: "Accessibility",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      name: "Sophia Wilson",
      firstName: "Sophia",
      email: "employee4@example.com",
      password: "123",
      taskStats: {
        total: 3,
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          id: 1,
          title: "Prepare Weekly Report",
          date: "2026-01-04",
          description: "Compile and prepare weekly progress report.",
          category: "Reporting",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Client Feedback Review",
          date: "2026-01-06",
          description: "Review and summarize client feedback.",
          category: "Communication",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 3,
          title: "Missed Deadline Task",
          date: "2026-01-03",
          description: "Task failed due to missed deadline.",
          category: "Management",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 5,
      name: "Daniel Martinez",
      firstName: "Daniel",
      email: "employee5@example.com",
      password: "123",
      taskStats: {
        total: 6,
        active: 3,
        newTask: 1,
        completed: 2,
        failed: 1
      },
      tasks: [
        {
          id: 1,
          title: "Setup Project Repo",
          date: "2026-01-02",
          description: "Initialize project repository and README.",
          category: "Setup",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Implement Auth Flow",
          date: "2026-01-07",
          description: "Create login and logout authentication flow.",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          id: 3,
          title: "Code Review",
          date: "2026-01-05",
          description: "Review pull requests from team members.",
          category: "Review",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 4,
          title: "Hotfix Production Bug",
          date: "2026-01-06",
          description: "Fix critical production bug.",
          category: "Production",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          id: 5,
          title: "Performance Optimization",
          date: "2026-01-08",
          description: "Improve app performance metrics.",
          category: "Performance",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          id: 6,
          title: "Update Dependencies",
          date: "2026-01-09",
          description: "Update outdated npm dependencies.",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    }
  ],
  employer: {
    id: 101,
    name: "Robert Anderson",
    firstName: "Robert",
    email: "employer@example.com",
    password: "123"
  }
};




export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(data.employees));
  localStorage.setItem("admin", JSON.stringify(data.employer));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  return { employees, admin };
};
