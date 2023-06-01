export type Pagination = {
  current_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
  last_visible_page: number;
};
