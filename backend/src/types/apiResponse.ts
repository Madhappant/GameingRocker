export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalGames?: number;
    totalUsers?: number;
    totalReviews?: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  timestamp?: string;
}