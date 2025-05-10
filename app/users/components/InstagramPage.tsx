'use client';

import React, { Suspense } from 'react';
import UserHeader from './UserHeader';
import UserSkeleton from './UserSkeleton';

interface InstagramPageProps {
  totalUsers: number;
  currentPage: number;
  usersList: React.ReactNode;
  pagination: React.ReactNode;
}

// A component that structures the Instagram users page with Suspense boundaries
export function InstagramPage({
  totalUsers,
  currentPage,
  usersList,
  pagination,
}: InstagramPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with neo-brutalist design */}
      <Suspense
        fallback={
          <div className="mb-12 relative animate-pulse">
            <div className="absolute -top-2 -left-2 w-full h-full bg-yellow-400 border-4 border-black -z-10 transform rotate-1"></div>
            <div className="bg-white border-4 border-black p-6 relative z-10 h-32"></div>
          </div>
        }
      >
        <UserHeader totalUsers={totalUsers} currentPage={currentPage} />
      </Suspense>

      {/* Users list with streaming */}
      {usersList}

      {/* Pagination controls */}
      {pagination}
    </div>
  );
}

export default InstagramPage;
