import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Dashboard = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/dashboard');
      if (response.data.success) {
        setDashboardData(response.data.data);
      } else {
        setError('Failed to load dashboard data');
      }
    } catch (error) {
      console.error('Dashboard fetch error:', error);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex bg-gradient-bg">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="loading-spinner mx-auto mb-4"></div>
            <p className="text-secondary-600 font-medium">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex bg-gradient-bg">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-secondary-800 mb-4">
              Unable to Load Dashboard
            </h2>
            <p className="text-secondary-600 mb-6">{error}</p>
            <button
              onClick={fetchDashboardData}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { user: userData, stats, recent_activities } = dashboardData;

  return (
    <div className="min-h-screen flex bg-gradient-bg">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header Section */}
          <div className="mb-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-secondary-100">
              <div className="flex items-center space-x-6">
                {/* Profile Image */}
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {userData?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                
                {/* User Info */}
                <div className="flex-1">
                  <h1 className="text-3xl font-heading font-bold text-secondary-900 mb-2">
                    Welcome back, {userData?.name}!
                  </h1>
                  <p className="text-secondary-600 mb-4">
                    Continue your career journey and level up your skills
                  </p>
                  
                  {/* XP Progress */}
                  <div className="max-w-md">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-secondary-600">Level {userData?.level}</span>
                      <span className="text-primary-600 font-medium">{userData?.xp_level} XP</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full transition-all duration-1000 xp-progress"
                        style={{ width: `${userData?.xp_progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-secondary-500 mt-1">
                      {userData?.xp_to_next_level} XP to next level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up animation-delay-200">
            <div className="card interactive-hover">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-900">{stats?.tasks_completed || 0}</p>
                  <p className="text-sm text-secondary-600">Tasks Completed</p>
                </div>
              </div>
            </div>

            <div className="card interactive-hover">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-900">{stats?.community_posts || 0}</p>
                  <p className="text-sm text-secondary-600">Community Posts</p>
                </div>
              </div>
            </div>

            <div className="card interactive-hover">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-900">{stats?.resume_updates || 0}</p>
                  <p className="text-sm text-secondary-600">Resume Updates</p>
                </div>
              </div>
            </div>

            <div className="card interactive-hover">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-900">{stats?.achievements?.length || 0}</p>
                  <p className="text-sm text-secondary-600">Achievements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up animation-delay-400">
            {/* Recent Activities */}
            <div className="card">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                Recent Activities
              </h3>
              <div className="space-y-4">
                {recent_activities?.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">
                        {activity.type === 'test' ? '🎯' : activity.type === 'signup' ? '🎉' : '📊'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary-900">{activity.title}</h4>
                      <p className="text-sm text-secondary-600">{activity.description}</p>
                      {activity.xp_gained > 0 && (
                        <p className="text-xs text-primary-600 font-medium mt-1">
                          +{activity.xp_gained} XP
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="card">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                Achievements
              </h3>
              <div className="space-y-3">
                {stats?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🏆</span>
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">{achievement}</p>
                      <p className="text-xs text-secondary-600">Unlocked</p>
                    </div>
                  </div>
                ))}
                {(!stats?.achievements || stats.achievements.length === 0) && (
                  <p className="text-secondary-500 text-center py-4">
                    Complete more activities to unlock achievements!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 animate-slide-up animation-delay-600">
            <div className="card">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="btn-primary text-left p-4 h-auto">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-medium">View Tasks</p>
                      <p className="text-sm opacity-90">Complete daily challenges</p>
                    </div>
                  </div>
                </button>
                
                <button className="btn-outline text-left p-4 h-auto">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <p className="font-medium">Join Community</p>
                      <p className="text-sm">Connect with peers</p>
                    </div>
                  </div>
                </button>
                
                <button className="btn-secondary text-left p-4 h-auto">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="font-medium">Update Resume</p>
                      <p className="text-sm">Improve your profile</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
