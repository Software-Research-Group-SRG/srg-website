import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

/**
 * Pagination Component
 * 
 * Provides a responsive, animated pagination control for navigating through multiple pages.
 * Supports an optional "Items per page" select dropdown if `itemsPerPage` and `onItemsPerPageChange` are provided.
 */
const Pagination = ({ 
  currentPage = 1, 
  totalPages = 10, 
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  itemsPerPageOptions = [1, 2, 4, 6, 8, 10]
}) => {
  const paginationRange = useMemo(() => {
    // Total numbers to show around current page
    const siblingCount = 1;
    const totalPageNumbers = siblingCount + 5; 

    // If totalPages is 0, return empty array
    if (totalPages === 0) return [];

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  }, [totalPages, currentPage]);

  const hasDropdown = itemsPerPage !== undefined && onItemsPerPageChange !== undefined;

  // We keep it visible if dropdown is requested, regardless of totalPages
  // If no dropdown is requested and pages < 2, we hide the component entirely.
  if (currentPage === 0 || (!hasDropdown && paginationRange.length < 2)) {
    return null;
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center ${hasDropdown ? 'justify-between w-full px-2' : 'justify-center'} gap-4 text-[var(--text-muted)] font-medium text-sm sm:text-base selection:bg-transparent`}>
      
      {/* Items Per Page Selector */}
      {hasDropdown && (
        <div className="flex items-center gap-2 text-sm text-[var(--text-main)] font-semibold">
          <span>Items per page:</span>
          <select 
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="bg-transparent border-2 border-[#3185FF]/80 rounded-md px-2 py-1 text-white focus:outline-none focus:border-[#35A4B9] cursor-pointer shadow-[0_0_10px_rgba(49,133,255,0.2)]"
          >
              {itemsPerPageOptions.map(opt => (
                  <option key={opt} value={opt} className="bg-[#0f172a] text-white">{opt}</option>
              ))}
          </select>
        </div>
      )}

      {/* Pages Controls */}
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1 || totalPages === 0}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-colors hover:text-white disabled:opacity-50 disabled:hover:text-[var(--text-muted)]"
        >
          <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center space-x-1 sm:space-x-2">
          {paginationRange?.map((pageNumber, index) => {
            if (pageNumber === '...') {
              return (
                <span key={`dots-${index}`} className="px-2 sm:px-3 py-2 text-[var(--text-muted)]">
                  &#8230;
                </span>
              );
            }

            const isActive = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={`relative px-3 sm:px-4 py-2 rounded-xl transition-colors hover:text-white z-10 ${
                  isActive ? 'text-white' : ''
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="pagination-active-bg"
                    className="absolute inset-0 bg-[#3185FF] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 block w-full h-full text-center min-w-[1rem] sm:min-w-[1.25rem]">
                  {pageNumber}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages || totalPages <= 1}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-colors hover:text-white disabled:opacity-50 disabled:hover:text-[var(--text-muted)]"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
