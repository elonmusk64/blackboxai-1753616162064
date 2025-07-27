import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm bg-white/80 border-b border-white/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <span className="text-2xl font-heading font-bold text-secondary-900">
                  Level up
                </span>
                <p className="text-xs text-secondary-600 -mt-1">AI Career Guidance</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-secondary-700 hover:text-primary-600 font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-primary-50"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn-primary shadow-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              🚀 Transform Your Career Journey
            </div>
            
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-secondary-900 mb-8 leading-tight">
              Level up Your
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent block mt-2">
                Career Journey
              </span>
            </h1>
            
            <p className="text-xl text-secondary-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover your ideal career path with AI-powered guidance, personalized assessments, and expert insights. Join thousands of learners transforming their professional future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/signup"
                className="btn-primary text-lg px-10 py-5 animate-bounce-gentle shadow-strong transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/login"
                className="btn-outline text-lg px-10 py-5 transform hover:scale-105"
              >
                Already have an account?
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-500 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>10,000+ Career Assessments</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>AI-Powered Guidance</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 animate-slide-up animation-delay-200">
            <div className="card-hover text-center bg-white/60 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                AI Career Assessment
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Take our comprehensive assessment to discover career paths that match your skills, interests, and personality perfectly.
              </p>
            </div>
            
            <div className="card-hover text-center bg-white/60 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                AI Career Coach
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Get personalized guidance from our AI coach for resume building, interview prep, and strategic career planning.
              </p>
            </div>
            
            <div className="card-hover text-center bg-white/60 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                Track Progress
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Monitor your career development with XP levels, achievements, and personalized learning paths that grow with you.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-20 animate-slide-up animation-delay-400">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-secondary-800 mb-4">
                How Level up Works
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Three simple steps to transform your career journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-medium">
                  1
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  Take Assessment
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  Complete our comprehensive career assessment to understand your strengths, interests, and ideal career matches.
                </p>
                {/* Connection Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 transform -translate-x-8"></div>
              </div>
              
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-medium">
                  2
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  Get Recommendations
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  Receive personalized career recommendations with detailed insights and AI-powered guidance tailored to you.
                </p>
                {/* Connection Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent-300 to-secondary-300 transform -translate-x-8"></div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-medium">
                  3
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  Start Your Journey
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  Begin your career development with AI guidance, community support, and personalized tasks to reach your goals.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-slide-up animation-delay-600">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white shadow-strong">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Ready to Level up Your Career?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of professionals who have discovered their ideal career path with our AI-powered platform. Start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/signup"
                  className="inline-block bg-white text-primary-600 font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-medium"
                >
                  Start Now - It's Free
                </Link>
                <Link
                  to="/login"
                  className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
