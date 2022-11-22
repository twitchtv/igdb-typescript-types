/** ApiObject Type, id and other key:value pairs */
export interface ApiObject {
  id: number;
  [keys: string]: ApiObjectProperty;
}

/** Possible types of an ApiObject's properties */
export type ApiObjectProperty =
  | ApiObject[]
  | ApiObject
  | number[]
  | number
  | string
  | string[]
  | boolean
  | undefined;

export interface Count extends ApiObject {
  count?: number;
}

export interface MultiQueryResult extends ApiObject {
  name?: string;
  results?: Array<any> | number[];
  count?: number;
}

export interface MultiQueryResultArray extends ApiObject {
  result?: Array<MultiQueryResult> | number[];
}

export interface AgeRatingResult extends ApiObject {
  age_ratings?: Array<AgeRating> | number[];
}

export interface AgeRating extends ApiObject {
  id: number;
  category?: AgeRatingCategoryEnum;
  content_descriptions?: Array<AgeRatingContentDescription> | number[];
  rating?: AgeRatingRatingEnum;
  rating_cover_url?: string;
  synopsis?: string;
}

export interface AgeRatingContentDescriptionResult extends ApiObject {
  age_rating_content_descriptions?:
    | Array<AgeRatingContentDescription>
    | number[];
}

export interface AgeRatingContentDescription extends ApiObject {
  id: number;
  category?: AgeRatingRatingEnum;
  description?: string;
}

export interface AlternativeNameResult extends ApiObject {
  alternative_names?: Array<AlternativeName> | number[];
}

export interface AlternativeName extends ApiObject {
  id: number;
  comment?: string;
  game?: Game | number;
  name?: string;
}

export interface ApiTokenResult extends ApiObject {
  api_tokens?: Array<ApiToken> | number[];
}

export interface ApiToken extends ApiObject {
  id: number;
  created_at?: number;
  expires_in?: number;
  token?: string;
  user?: number;
}

export interface ArtworkResult extends ApiObject {
  artworks?: Array<Artwork> | number[];
}

export interface Artwork extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  game?: Game | number;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface CharacterResult extends ApiObject {
  characters?: Array<Character> | number[];
}

export interface Character extends ApiObject {
  id: number;
  akas?: Array<string> | number[];
  country_name?: string;
  created_at?: number;
  description?: string;
  games?: Array<Game> | number[];
  gender?: CharacterGenderEnum;
  mug_shot?: CharacterMugShot | number;
  name?: string;
  slug?: string;
  species?: CharacterSpeciesEnum;
  updated_at?: number;
  url?: string;
}

export interface CharacterMugShotResult extends ApiObject {
  character_mug_shots?: Array<CharacterMugShot> | number[];
}

export interface CharacterMugShot extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface CollectionResult extends ApiObject {
  collections?: Array<Collection> | number[];
}

export interface Collection extends ApiObject {
  id: number;
  created_at?: number;
  games?: Array<Game> | number[];
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface CompanyResult extends ApiObject {
  companies?: Array<Company> | number[];
}

export interface Company extends ApiObject {
  id: number;
  change_date?: number;
  change_date_category?: DateFormatStartDateCategoryEnum;
  changed_company_id?: Company | number;
  country?: number;
  created_at?: number;
  description?: string;
  developed?: Array<Game> | number[];
  logo?: CompanyLogo | number;
  name?: string;
  parent?: Company | number;
  published?: Array<Game> | number[];
  slug?: string;
  start_date?: number;
  start_date_category?: DateFormatStartDateCategoryEnum;
  updated_at?: number;
  url?: string;
  websites?: Array<CompanyWebsite> | number[];
}

export interface CompanyLogoResult extends ApiObject {
  company_logos?: Array<CompanyLogo> | number[];
}

export interface CompanyLogo extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface CompanyWebsiteResult extends ApiObject {
  company_websites?: Array<CompanyWebsite> | number[];
}

export interface CompanyWebsite extends ApiObject {
  id: number;
  category?: WebsiteCategoryEnum;
  trusted?: boolean;
  url?: string;
}

export interface CoverResult extends ApiObject {
  covers?: Array<Cover> | number[];
}

export interface Cover extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  game?: Game | number;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface ExternalGameResult extends ApiObject {
  external_games?: Array<ExternalGame> | number[];
}

export interface ExternalGame extends ApiObject {
  id: number;
  category?: ExternalGameCategoryEnum;
  created_at?: number;
  game?: Game | number;
  name?: string;
  uid?: string;
  updated_at?: number;
  url?: string;
  year?: number;
}

export interface FranchiseResult extends ApiObject {
  franchises?: Array<Franchise> | number[];
}

export interface Franchise extends ApiObject {
  id: number;
  created_at?: number;
  games?: Array<Game> | number[];
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface GameResult extends ApiObject {
  games?: Array<Game> | number[];
}

export interface Game extends ApiObject {
  id: number;
  age_ratings?: Array<AgeRating> | number[];
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  alternative_names?: Array<AlternativeName> | number[];
  artworks?: Array<Artwork> | number[];
  bundles?: Array<Game> | number[];
  category?: GameCategoryEnum;
  collection?: Collection | number;
  cover?: Cover | number;
  created_at?: number;
  dlcs?: Array<Game> | number[];
  expansions?: Array<Game> | number[];
  external_games?: Array<ExternalGame> | number[];
  first_release_date?: number;
  follows?: number;
  franchise?: Franchise | number;
  franchises?: Array<Franchise> | number[];
  game_engines?: Array<GameEngine> | number[];
  game_modes?: Array<GameMode> | number[];
  genres?: Array<Genre> | number[];
  hypes?: number;
  involved_companies?: Array<InvolvedCompany> | number[];
  keywords?: Array<Keyword> | number[];
  multiplayer_modes?: Array<MultiplayerMode> | number[];
  name?: string;
  parent_game?: Game | number;
  platforms?: Array<Platform> | number[];
  player_perspectives?: Array<PlayerPerspective> | number[];
  rating?: number;
  rating_count?: number;
  release_dates?: Array<ReleaseDate> | number[];
  screenshots?: Array<Screenshot> | number[];
  similar_games?: Array<Game> | number[];
  slug?: string;
  standalone_expansions?: Array<Game> | number[];
  status?: GameStatusEnum;
  storyline?: string;
  summary?: string;
  tags?: Array<number>;
  themes?: Array<Theme> | number[];
  total_rating?: number;
  total_rating_count?: number;
  updated_at?: number;
  url?: string;
  version_parent?: Game | number;
  version_title?: string;
  videos?: Array<GameVideo> | number[];
  websites?: Array<Website> | number[];
}

export interface GameEngineResult extends ApiObject {
  game_engines?: Array<GameEngine> | number[];
}

export interface GameEngine extends ApiObject {
  id: number;
  companies?: Array<Company> | number[];
  created_at?: number;
  description?: string;
  logo?: GameEngineLogo | number;
  name?: string;
  platforms?: Array<Platform> | number[];
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface GameEngineLogoResult extends ApiObject {
  game_engine_logos?: Array<GameEngineLogo> | number[];
}

export interface GameEngineLogo extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface GameModeResult extends ApiObject {
  game_modes?: Array<GameMode> | number[];
}

export interface GameMode extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface GameVersionResult extends ApiObject {
  game_versions?: Array<GameVersion> | number[];
}

export interface GameVersion extends ApiObject {
  id: number;
  created_at?: number;
  features?: Array<GameVersionFeature> | number[];
  game?: Game | number;
  games?: Array<Game> | number[];
  updated_at?: number;
  url?: string;
}

export interface GameVersionFeatureResult extends ApiObject {
  game_version_features?: Array<GameVersionFeature> | number[];
}

export interface GameVersionFeature extends ApiObject {
  id: number;
  category?: GameVersionFeatureCategoryEnum;
  description?: string;
  position?: number;
  title?: string;
  values?: Array<GameVersionFeatureValue> | number[];
}

export interface GameVersionFeatureValueResult extends ApiObject {
  game_version_feature_values?: Array<GameVersionFeatureValue> | number[];
}

export interface GameVersionFeatureValue extends ApiObject {
  id: number;
  game?: Game | number;
  game_feature?: GameVersionFeature | number;
  included_feature?: GameVersionFeatureValueIncludedFeatureEnum;
  note?: string;
}

export interface GameVideoResult extends ApiObject {
  game_videos?: Array<GameVideo> | number[];
}

export interface GameVideo extends ApiObject {
  id: number;
  game?: Game | number;
  name?: string;
  video_id?: string;
}

export interface GenreResult extends ApiObject {
  genres?: Array<Genre> | number[];
}

export interface Genre extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface InvolvedCompanyResult extends ApiObject {
  involved_companies?: Array<InvolvedCompany> | number[];
}

export interface InvolvedCompany extends ApiObject {
  id: number;
  company?: Company | number;
  created_at?: number;
  developer?: boolean;
  game?: Game | number;
  porting?: boolean;
  publisher?: boolean;
  supporting?: boolean;
  updated_at?: number;
}

export interface KeywordResult extends ApiObject {
  keywords?: Array<Keyword> | number[];
}

export interface Keyword extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface MultiplayerModeResult extends ApiObject {
  multiplayer_modes?: Array<MultiplayerMode> | number[];
}

export interface MultiplayerMode extends ApiObject {
  id: number;
  campaigncoop?: boolean;
  dropin?: boolean;
  game?: Game | number;
  lancoop?: boolean;
  offlinecoop?: boolean;
  offlinecoopmax?: number;
  offlinemax?: number;
  onlinecoop?: boolean;
  onlinecoopmax?: number;
  onlinemax?: number;
  platform?: Platform | number;
  splitscreen?: boolean;
  splitscreenonline?: boolean;
}

export interface PlatformResult extends ApiObject {
  platforms?: Array<Platform> | number[];
}

export interface Platform extends ApiObject {
  id: number;
  abbreviation?: string;
  alternative_name?: string;
  category?: PlatformCategoryEnum;
  created_at?: number;
  generation?: number;
  name?: string;
  platform_logo?: PlatformLogo | number;
  product_family?: ProductFamily | number;
  slug?: string;
  summary?: string;
  updated_at?: number;
  url?: string;
  versions?: Array<PlatformVersion> | number[];
  websites?: Array<PlatformWebsite> | number[];
}

export interface PlatformLogoResult extends ApiObject {
  platform_logos?: Array<PlatformLogo> | number[];
}

export interface PlatformLogo extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface PlatformVersionResult extends ApiObject {
  platform_versions?: Array<PlatformVersion> | number[];
}

export interface PlatformVersion extends ApiObject {
  id: number;
  companies?: Array<PlatformVersionCompany> | number[];
  connectivity?: string;
  cpu?: string;
  graphics?: string;
  main_manufacturer?: PlatformVersionCompany | number;
  media?: string;
  memory?: string;
  name?: string;
  online?: string;
  os?: string;
  output?: string;
  platform_logo?: PlatformLogo | number;
  platform_version_release_dates?: Array<PlatformVersionReleaseDate> | number[];
  resolutions?: string;
  slug?: string;
  sound?: string;
  storage?: string;
  summary?: string;
  url?: string;
}

export interface PlatformVersionCompanyResult extends ApiObject {
  platform_version_companies?: Array<PlatformVersionCompany> | number[];
}

export interface PlatformVersionCompany extends ApiObject {
  id: number;
  comment?: string;
  company?: Company | number;
  developer?: boolean;
  manufacturer?: boolean;
}

export interface PlatformVersionReleaseDateResult extends ApiObject {
  platform_version_release_dates?: Array<PlatformVersionReleaseDate> | number[];
}

export interface PlatformVersionReleaseDate extends ApiObject {
  id: number;
  category?: DateFormatStartDateCategoryEnum;
  created_at?: number;
  date?: number;
  human?: string;
  m?: number;
  platform_version?: PlatformVersion | number;
  region?: RegionLanguageEnum;
  updated_at?: number;
  y?: number;
}

export interface PlatformWebsiteResult extends ApiObject {
  platform_websites?: Array<PlatformWebsite> | number[];
}

export interface PlatformWebsite extends ApiObject {
  id: number;
  category?: WebsiteCategoryEnum;
  trusted?: boolean;
  url?: string;
}

export interface PlayerPerspectiveResult extends ApiObject {
  player_perspectives?: Array<PlayerPerspective> | number[];
}

export interface PlayerPerspective extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface ProductFamilyResult extends ApiObject {
  product_families?: Array<ProductFamily> | number[];
}

export interface ProductFamily extends ApiObject {
  id: number;
  name?: string;
  slug?: string;
}

export interface ReleaseDateResult extends ApiObject {
  release_dates?: Array<ReleaseDate> | number[];
}

export interface ReleaseDate extends ApiObject {
  id: number;
  category?: DateFormatStartDateCategoryEnum;
  created_at?: number;
  date?: number;
  game?: Game | number;
  human?: string;
  m?: number;
  platform?: Platform | number;
  region?: RegionLanguageEnum;
  updated_at?: number;
  y?: number;
}

export interface ScreenshotResult extends ApiObject {
  screenshots?: Array<Screenshot> | number[];
}

export interface Screenshot extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  game?: Game | number;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
}

export interface SearchResult extends ApiObject {
  searches?: Array<Search> | number[];
}

export interface Search extends ApiObject {
  id: number;
  alternative_name?: string;
  character?: Character | number;
  collection?: Collection | number;
  company?: Company | number;
  description?: string;
  game?: Game | number;
  name?: string;
  platform?: Platform | number;
  published_at?: number;
  test_dummy?: TestDummy | number;
  theme?: Theme | number;
}

export interface TestDummyResult extends ApiObject {
  test_dummies?: Array<TestDummy> | number[];
}

export interface TestDummy extends ApiObject {
  id: number;
  bool_value?: boolean;
  created_at?: number;
  enum_test?: TestDummyEnumTestEnum;
  float_value?: number;
  game?: Game | number;
  integer_array?: Array<number>;
  integer_value?: number;
  name?: string;
  new_integer_value?: number;
  private?: boolean;
  slug?: string;
  string_array?: Array<string> | number[];
  test_dummies?: Array<TestDummy> | number[];
  test_dummy?: TestDummy | number;
  updated_at?: number;
  url?: string;
  user?: User | number;
}

export interface ThemeResult extends ApiObject {
  themes?: Array<Theme> | number[];
}

export interface Theme extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
}

export interface UserResult extends ApiObject {
  users?: Array<User> | number[];
}

export interface User extends ApiObject {
  id: number;
  battlenet?: string;
  color?: UserColorEnum;
  created_at?: number;
  discord?: string;
  facebook?: string;
  google_plus?: string;
  instagram?: string;
  linkedin?: string;
  origin?: string;
  pinterest?: string;
  presentation?: string;
  reddit?: string;
  role?: UserRoleEnum;
  slug?: string;
  soundcloud?: string;
  steam?: string;
  twitch?: string;
  twitter?: string;
  updated_at?: number;
  uplay?: string;
  url?: string;
  username?: string;
  youtube?: string;
}

export interface WebsiteResult extends ApiObject {
  websites?: Array<Website> | number[];
}

export interface Website extends ApiObject {
  id: number;
  category?: WebsiteCategoryEnum;
  game?: Game | number;
  trusted?: boolean;
  url?: string;
}

export enum RegionLanguageEnum {
  REGION_LANGUAGE_NULL = 0,
  EUROPE = 1,
  NORTH_AMERICA = 2,
  AUSTRALIA = 3,
  NEW_ZELAND = 4,
  JAPAN = 5,
  CHINA = 6,
  ASIA = 7,
  WORLDWIDE = 8,
  HONG_KONG = 9,
  SOUTH_KOREA = 10,
}

export enum AgeRatingCategoryEnum {
  AGERATING_CATEGORY_NULL = 0,
  ESRB = 1,
  PEGI = 2,
}

export enum AgeRatingRatingEnum {
  AGERATING_RATING_NULL = 0,
  THREE = 1,
  SEVEN = 2,
  TWELVE = 3,
  SIXTEEN = 4,
  EIGHTEEN = 5,
  RP = 6,
  EC = 7,
  E = 8,
  E10 = 9,
  T = 10,
  M = 11,
  AO = 12,
}

export enum CharacterGenderEnum {
  GENDER_GENDER_NULL = 0,
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}

export enum CharacterSpeciesEnum {
  CHARACTER_SPECIES_NULL = 0,
  HUMAN = 1,
  ALIEN = 2,
  ANIMAL = 3,
  ANDROID = 4,
  UNKNOWN = 5,
}

export enum DateFormatStartDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

export enum WebsiteCategoryEnum {
  WEBSITE_CATEGORY_NULL = 0,
  WEBSITE_OFFICIAL = 1,
  WEBSITE_WIKIA = 2,
  WEBSITE_WIKIPEDIA = 3,
  WEBSITE_FACEBOOK = 4,
  WEBSITE_TWITTER = 5,
  WEBSITE_TWITCH = 6,
  WEBSITE_INSTAGRAM = 8,
  WEBSITE_YOUTUBE = 9,
  WEBSITE_IPHONE = 10,
  WEBSITE_IPAD = 11,
  WEBSITE_ANDROID = 12,
  WEBSITE_STEAM = 13,
  WEBSITE_REDDIT = 14,
  WEBSITE_ITCH = 15,
  WEBSITE_EPICGAMES = 16,
  WEBSITE_GOG = 17,
}

export enum ExternalGameCategoryEnum {
  EXTERNALGAME_CATEGORY_NULL = 0,
  EXTERNALGAME_STEAM = 1,
  EXTERNALGAME_GOG = 5,
  EXTERNALGAME_YOUTUBE = 10,
  EXTERNALGAME_MICROSOFT = 11,
  EXTERNALGAME_APPLE = 13,
  EXTERNALGAME_TWITCH = 14,
  EXTERNALGAME_ANDROID = 15,
}

export enum GameCategoryEnum {
  MAIN_GAME = 0,
  DLC_ADDON = 1,
  EXPANSION = 2,
  BUNDLE = 3,
  STANDALONE_EXPANSION = 4,
}

export enum GameStatusEnum {
  RELEASED = 0,
  ALPHA = 2,
  BETA = 3,
  EARLY_ACCESS = 4,
  OFFLINE = 5,
  CANCELLED = 6,
}

export enum GameVersionFeatureCategoryEnum {
  BOOLEAN = 0,
  DESCRIPTION = 1,
}

export enum GameVersionFeatureValueIncludedFeatureEnum {
  NOT_INCLUDED = 0,
  INCLUDED = 1,
  PRE_ORDER_ONLY = 2,
}

export enum UserColorEnum {
  GREEN = 0,
  BLUE = 1,
  RED = 2,
  ORANGE = 3,
  PINK = 4,
  YELLOW = 5,
}

export enum PlatformCategoryEnum {
  PLATFORM_CATEGORY_NULL = 0,
  CONSOLE = 1,
  ARCADE = 2,
  PLATFORM = 3,
  OPERATING_SYSTEM = 4,
  PORTABLE_CONSOLE = 5,
  COMPUTER = 6,
}

export enum TestDummyEnumTestEnum {
  TESTDUMMY_ENUM_TEST_NULL = 0,
  ENUM1 = 1,
  ENUM2 = 2,
}

export enum UserRoleEnum {
  USER_ROLE_NULL = 0,
  USER_USER = 1,
  USER_ADVANCED_USER = 2,
  USER_SUPER_ADVANCED_USER = 3,
  USER_KEEPER = 4,
  USER_ADMIN = 9,
  USER_SUPER_ADMIN = 10,
}
