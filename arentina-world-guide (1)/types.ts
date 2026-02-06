export interface InternationalRelation {
  target: string;
  relationship: string;
  description: string[];
  view: string;
}

export interface Leader {
  title: string;
  name: string;
  description: string;
}

export interface KeyFigure {
  name: string;
  role: string;
  age?: string;
  description: string[];
  image?: string;
}

export interface Landmark {
  name: string;
  description: string;
}

export interface Nation {
  id: string;
  name: string;
  englishName: string;
  shortDescription: string;
  capital: string;
  symbol: string;
  landmark: Landmark;
  system: string;
  characteristics: string[];
  military: string;
  colorTheme: string;
  relations: InternationalRelation[];
  leadership: Leader[];
  keyFigures: KeyFigure[];
  keyGroups: { name: string; description: string }[];
  religion?: string;
  image: string;
  history?: string; // Added history field
}

export interface WorldData {
  title: string;
  description: string;
  nations: Nation[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}