export type PageRow = {
  id: string;
  parent_id: string | null;
  title: string;
  content: string;
  position: number;
  created_by: string | null;
  created_at: string;
  updated_at: string;
};

type PageInsert = Partial<Omit<PageRow, "id" | "created_at" | "updated_at">> & {
  id?: string;
};

type PageUpdate = Partial<Omit<PageRow, "id">>;

export type Database = {
  public: {
    Tables: {
      pages: {
        Row: PageRow;
        Insert: PageInsert;
        Update: PageUpdate;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
