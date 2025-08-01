import React from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Brain, Users, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Helmet>
        <title>Ma Alu Theresia Memory Rescue & Glitter of Hope Health Inc.</title>
        <meta name="description" content="Supporting individuals and families affected by memory loss, cognitive impairment, and cardiovascular health issues through charitable initiatives and community-driven programs." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to{' '}
                  <span className="text-blue-600">Ma Alu Theresia</span>{' '}
                  Memory Rescue
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A non-profit organization dedicated to supporting individuals and families 
                  affected by memory loss, cognitive impairment, and cardiovascular health issues 
                  through charitable initiatives and community-driven programs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Learn More
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Involved
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/external/alzball.jpg"
                  alt="Community Support"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <p className="mt-4 text-sm text-gray-600 italic text-center">
                Eric Nvenge playing balloon volleyball with James Ivey, age 93, 
                demonstrating the positive impact of social engagement and community connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guided by Charitable Principles
            </h2>
            <p className="text-xl text-gray-600">
              We honor the memory of two remarkable women
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="mb-6">
                <img
                  src="/external/Ma_Alu.jpg"
                  alt="Ma Alu Elizabeth Nvenge"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ma Alu Elizabeth Nvenge
              </h3>
              <p className="text-gray-600">
                (1955-2022)<br />
                Mother of 3 Children<br />
                Died of heart attack
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="mb-6">
                <img
                  src="/external/Ma_Theresa.jpg"
                  alt="Ma Theresa Nvenge"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ma Theresa Nvenge
              </h3>
              <p className="text-gray-600">
                (1934-2016)<br />
                Mother of 12 Children<br />
                Died of complications of memory loss
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive support through innovative, holistic, and 
              non-pharmacological approaches to enhance quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Memory Enhancement
              </h3>
              <p className="text-gray-600">
                Cognitive stimulation, physical activity, social interaction, and spiritual support
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lifestyle Changes
              </h3>
              <p className="text-gray-600">
                Nutrition, stress management, exercise, and social support programs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Medication Awareness
              </h3>
              <p className="text-gray-600">
                Counterfeit medication awareness and prevention education
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cardiovascular Health
              </h3>
              <p className="text-gray-600">
                Education and awareness programs for heart health and prevention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals committed to making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/external/placeholderimage8203-333q-300h.png"
                  alt="Eric Nvenge"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eric Nvenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Founder with a strong background in pharmacy and community health. 
                Committed to supporting individuals and families affected by memory loss 
                and cardiovascular issues through community-based initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/external/placeholderimage8203-333q-300h.png"
                  alt="Michel Balla"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michel Balla</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated board member with over 5 years of experience supporting 
                individuals with developmental disabilities. Passionate about promoting 
                cognitive health through creative strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/external/placeholderimage8203-333q-300h.png"
                  alt="Sugar Ebere Raymond"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sugar Ebere Raymond</h3>
              <p className="text-gray-600 leading-relaxed">
                Member with a Master's in Information Technology. Bridges healthcare 
                and technology to develop innovative solutions that support individuals 
                with memory loss and cognitive challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Together, we can enhance the quality of life for those affected and create 
            a more compassionate and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              Volunteer Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;