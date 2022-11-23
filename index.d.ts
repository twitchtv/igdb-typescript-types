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
  ageratings?: Array<AgeRating> | number[];
}

export interface AgeRating extends ApiObject {
  id: number;
  category?: AgeRatingCategoryEnum;
  content_descriptions?: Array<AgeRatingContentDescription> | number[];
  rating?: AgeRatingRatingEnum;
  rating_cover_url?: string;
  synopsis?: string;
  checksum?: string;
}

export interface AgeRatingContentDescriptionResult extends ApiObject {
  ageratingcontentdescriptions?: Array<AgeRatingContentDescription> | number[];
}

export interface AgeRatingContentDescription extends ApiObject {
  id: number;
  category?: AgeRatingRatingEnum;
  description?: string;
  checksum?: string;
}

export interface AlternativeNameResult extends ApiObject {
  alternativenames?: Array<AlternativeName> | number[];
}

export interface AlternativeName extends ApiObject {
  id: number;
  comment?: string;
  game?: Game | number;
  name?: string;
  checksum?: string;
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
  checksum?: string;
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
  gender?: GenderGenderEnum;
  mug_shot?: CharacterMugShot | number;
  name?: string;
  slug?: string;
  species?: CharacterSpeciesEnum;
  updated_at?: number;
  url?: string;
  checksum?: string;
}

export interface CharacterMugShotResult extends ApiObject {
  charactermugshots?: Array<CharacterMugShot> | number[];
}

export interface CharacterMugShot extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
  checksum?: string;
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
  checksum?: string;
}

export interface CompanyResult extends ApiObject {
  companies?: Array<Company> | number[];
}

export interface Company extends ApiObject {
  id: number;
  change_date?: number;
  change_date_category?: DateFormatChangeDateCategoryEnum;
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
  start_date_category?: DateFormatChangeDateCategoryEnum;
  updated_at?: number;
  url?: string;
  websites?: Array<CompanyWebsite> | number[];
  checksum?: string;
}

export interface CompanyLogoResult extends ApiObject {
  companylogos?: Array<CompanyLogo> | number[];
}

export interface CompanyLogo extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
  checksum?: string;
}

export interface CompanyWebsiteResult extends ApiObject {
  companywebsites?: Array<CompanyWebsite> | number[];
}

export interface CompanyWebsite extends ApiObject {
  id: number;
  category?: WebsiteCategoryEnum;
  trusted?: boolean;
  url?: string;
  checksum?: string;
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
  checksum?: string;
  game_localization?: GameLocalization | number;
}

export interface ExternalGameResult extends ApiObject {
  externalgames?: Array<ExternalGame> | number[];
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
  media?: ExternalGameMediaEnum;
  platform?: Platform | number;
  countries?: Array<number>;
  checksum?: string;
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
  checksum?: string;
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
  checksum?: string;
  remakes?: Array<Game> | number[];
  remasters?: Array<Game> | number[];
  expanded_games?: Array<Game> | number[];
  ports?: Array<Game> | number[];
  forks?: Array<Game> | number[];
  language_supports?: Array<LanguageSupport> | number[];
  game_localizations?: Array<GameLocalization> | number[];
}

export interface GameEngineResult extends ApiObject {
  gameengines?: Array<GameEngine> | number[];
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
  checksum?: string;
}

export interface GameEngineLogoResult extends ApiObject {
  gameenginelogos?: Array<GameEngineLogo> | number[];
}

export interface GameEngineLogo extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
  checksum?: string;
}

export interface GameLocalizationResult extends ApiObject {
  gamelocalizations?: Array<GameLocalization> | number[];
}

export interface GameLocalization extends ApiObject {
  id: number;
  name?: string;
  cover?: Cover | number;
  game?: Game | number;
  region?: Region | number;
  created_at?: number;
  updated_at?: number;
  checksum?: string;
}

export interface GameModeResult extends ApiObject {
  gamemodes?: Array<GameMode> | number[];
}

export interface GameMode extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
  checksum?: string;
}

export interface GameVersionResult extends ApiObject {
  gameversions?: Array<GameVersion> | number[];
}

export interface GameVersion extends ApiObject {
  id: number;
  created_at?: number;
  features?: Array<GameVersionFeature> | number[];
  game?: Game | number;
  games?: Array<Game> | number[];
  updated_at?: number;
  url?: string;
  checksum?: string;
}

export interface GameVersionFeatureResult extends ApiObject {
  gameversionfeatures?: Array<GameVersionFeature> | number[];
}

export interface GameVersionFeature extends ApiObject {
  id: number;
  category?: GameVersionFeatureCategoryEnum;
  description?: string;
  position?: number;
  title?: string;
  values?: Array<GameVersionFeatureValue> | number[];
  checksum?: string;
}

export interface GameVersionFeatureValueResult extends ApiObject {
  gameversionfeaturevalues?: Array<GameVersionFeatureValue> | number[];
}

export interface GameVersionFeatureValue extends ApiObject {
  id: number;
  game?: Game | number;
  game_feature?: GameVersionFeature | number;
  included_feature?: GameVersionFeatureValueIncludedFeatureEnum;
  note?: string;
  checksum?: string;
}

export interface GameVideoResult extends ApiObject {
  gamevideos?: Array<GameVideo> | number[];
}

export interface GameVideo extends ApiObject {
  id: number;
  game?: Game | number;
  name?: string;
  video_id?: string;
  checksum?: string;
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
  checksum?: string;
}

export interface InvolvedCompanyResult extends ApiObject {
  involvedcompanies?: Array<InvolvedCompany> | number[];
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
  checksum?: string;
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
  checksum?: string;
}

export interface LanguageResult extends ApiObject {
  languages?: Array<Language> | number[];
}

export interface Language extends ApiObject {
  id: number;
  name?: string;
  native_name?: string;
  locale?: string;
  created_at?: number;
  updated_at?: number;
  checksum?: string;
}

export interface LanguageSupportResult extends ApiObject {
  languagesupports?: Array<LanguageSupport> | number[];
}

export interface LanguageSupport extends ApiObject {
  id: number;
  game?: Game | number;
  language?: Language | number;
  language_support_type?: LanguageSupportType | number;
  created_at?: number;
  updated_at?: number;
  checksum?: string;
}

export interface LanguageSupportTypeResult extends ApiObject {
  languagesupporttypes?: Array<LanguageSupportType> | number[];
}

export interface LanguageSupportType extends ApiObject {
  id: number;
  name?: string;
  created_at?: number;
  updated_at?: number;
  checksum?: string;
}

export interface MultiplayerModeResult extends ApiObject {
  multiplayermodes?: Array<MultiplayerMode> | number[];
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
  checksum?: string;
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
  platform_family?: PlatformFamily | number;
  slug?: string;
  summary?: string;
  updated_at?: number;
  url?: string;
  versions?: Array<PlatformVersion> | number[];
  websites?: Array<PlatformWebsite> | number[];
  checksum?: string;
}

export interface PlatformFamilyResult extends ApiObject {
  platformfamilies?: Array<PlatformFamily> | number[];
}

export interface PlatformFamily extends ApiObject {
  id: number;
  name?: string;
  slug?: string;
  checksum?: string;
}

export interface PlatformLogoResult extends ApiObject {
  platformlogos?: Array<PlatformLogo> | number[];
}

export interface PlatformLogo extends ApiObject {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
  checksum?: string;
}

export interface PlatformVersionResult extends ApiObject {
  platformversions?: Array<PlatformVersion> | number[];
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
  checksum?: string;
}

export interface PlatformVersionCompanyResult extends ApiObject {
  platformversioncompanies?: Array<PlatformVersionCompany> | number[];
}

export interface PlatformVersionCompany extends ApiObject {
  id: number;
  comment?: string;
  company?: Company | number;
  developer?: boolean;
  manufacturer?: boolean;
  checksum?: string;
}

export interface PlatformVersionReleaseDateResult extends ApiObject {
  platformversionreleasedates?: Array<PlatformVersionReleaseDate> | number[];
}

export interface PlatformVersionReleaseDate extends ApiObject {
  id: number;
  category?: DateFormatChangeDateCategoryEnum;
  created_at?: number;
  date?: number;
  human?: string;
  m?: number;
  platform_version?: PlatformVersion | number;
  region?: RegionRegionEnum;
  updated_at?: number;
  y?: number;
  checksum?: string;
}

export interface PlatformWebsiteResult extends ApiObject {
  platformwebsites?: Array<PlatformWebsite> | number[];
}

export interface PlatformWebsite extends ApiObject {
  id: number;
  category?: WebsiteCategoryEnum;
  trusted?: boolean;
  url?: string;
  checksum?: string;
}

export interface PlayerPerspectiveResult extends ApiObject {
  playerperspectives?: Array<PlayerPerspective> | number[];
}

export interface PlayerPerspective extends ApiObject {
  id: number;
  created_at?: number;
  name?: string;
  slug?: string;
  updated_at?: number;
  url?: string;
  checksum?: string;
}

export interface RegionResult extends ApiObject {
  regions?: Array<Region> | number[];
}

export interface Region extends ApiObject {
  id: number;
  name?: string;
  category?: string;
  identifier?: string;
  created_at?: number;
  updated_at?: number;
  checksum?: string;
}

export interface ReleaseDateResult extends ApiObject {
  releasedates?: Array<ReleaseDate> | number[];
}

export interface ReleaseDate extends ApiObject {
  id: number;
  category?: DateFormatChangeDateCategoryEnum;
  created_at?: number;
  date?: number;
  game?: Game | number;
  human?: string;
  m?: number;
  platform?: Platform | number;
  region?: RegionRegionEnum;
  updated_at?: number;
  y?: number;
  checksum?: string;
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
  checksum?: string;
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
  checksum?: string;
}

export interface TestDummyResult extends ApiObject {
  testdummies?: Array<TestDummy> | number[];
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
  checksum?: string;
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
  checksum?: string;
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
  checksum?: string;
}


export enum AgeRatingCategoryEnum {
  AGERATING_CATEGORY_NULL = 0,
  ESRB = 1,
  PEGI = 2,
  CERO = 3,
  USK = 4,
  GRAC = 5,
  CLASS_IND = 6,
  ACB = 7
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
  CERO_A = 13,
  CERO_B = 14,
  CERO_C = 15,
  CERO_D = 16,
  CERO_Z = 17,
  USK_0 = 18,
  USK_6 = 19,
  USK_12 = 20,
  USK_18 = 21,
  GRAC_ALL = 22,
  GRAC_TWELVE = 23,
  GRAC_FIFTEEN = 24,
  GRAC_EIGHTEEN = 25,
  GRAC_TESTING = 26,
  CLASS_IND_L = 27,
  CLASS_IND_TEN = 28,
  CLASS_IND_TWELVE = 29,
  CLASS_IND_FOURTEEN = 30,
  CLASS_IND_SIXTEEN = 31,
  CLASS_IND_EIGHTEEN = 32,
  ACB_G = 33,
  ACB_PG = 34,
  ACB_M = 35,
  ACB_MA15 = 36,
  ACB_R18 = 37,
  ACB_RC = 38
}

export enum GenderGenderEnum {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2
}

export enum CharacterSpeciesEnum {
  CHARACTER_SPECIES_NULL = 0,
  HUMAN = 1,
  ALIEN = 2,
  ANIMAL = 3,
  ANDROID = 4,
  UNKNOWN = 5
}

export enum DateFormatChangeDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7
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
  WEBSITE_DISCORD = 18
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
  EXTERNALGAME_AMAZON_ASIN = 20,
  EXTERNALGAME_AMAZON_LUNA = 22,
  EXTERNALGAME_AMAZON_ADG = 23,
  EXTERNALGAME_EPIC_GAME_STORE = 26,
  EXTERNALGAME_OCULUS = 28,
  EXTERNALGAME_UTOMIK = 29,
  EXTERNALGAME_ITCH_IO = 30,
  EXTERNALGAME_XBOX_MARKETPLACE = 31,
  EXTERNALGAME_KARTRIDGE = 32,
  EXTERNALGAME_PLAYSTATION_STORE_US = 36,
  EXTERNALGAME_FOCUS_ENTERTAINMENT = 37,
  EXTERNALGAME_XBOX_GAME_PASS_ULTIMATE_CLOUD = 54,
  EXTERNALGAME_GAMEJOLT = 55
}

export enum ExternalGameMediaEnum {
  EXTERNALGAME_MEDIA_NULL = 0,
  EXTERNALGAME_DIGITAL = 1,
  EXTERNALGAME_PHYSICAL = 2
}

export enum GameCategoryEnum {
  MAIN_GAME = 0,
  DLC_ADDON = 1,
  EXPANSION = 2,
  BUNDLE = 3,
  STANDALONE_EXPANSION = 4,
  MOD = 5,
  EPISODE = 6,
  SEASON = 7,
  REMAKE = 8,
  REMASTER = 9,
  EXPANDED_GAME = 10,
  PORT = 11,
  FORK = 12,
  PACK = 13,
  UPDATE = 14
}

export enum GameStatusEnum {
  RELEASED = 0,
  ALPHA = 2,
  BETA = 3,
  EARLY_ACCESS = 4,
  OFFLINE = 5,
  CANCELLED = 6,
  RUMORED = 7,
  DELISTED = 8
}

export enum GameVersionFeatureCategoryEnum {
  BOOLEAN = 0,
  DESCRIPTION = 1
}

export enum GameVersionFeatureValueIncludedFeatureEnum {
  NOT_INCLUDED = 0,
  INCLUDED = 1,
  PRE_ORDER_ONLY = 2
}

export enum PlatformCategoryEnum {
  PLATFORM_CATEGORY_NULL = 0,
  CONSOLE = 1,
  ARCADE = 2,
  PLATFORM = 3,
  OPERATING_SYSTEM = 4,
  PORTABLE_CONSOLE = 5,
  COMPUTER = 6
}

export enum RegionRegionEnum {
  REGION_REGION_NULL = 0,
  EUROPE = 1,
  NORTH_AMERICA = 2,
  AUSTRALIA = 3,
  NEW_ZEALAND = 4,
  JAPAN = 5,
  CHINA = 6,
  ASIA = 7,
  WORLDWIDE = 8,
  KOREA = 9,
  BRAZIL = 10
}

export enum TestDummyEnumTestEnum {
  TESTDUMMY_ENUM_TEST_NULL = 0,
  ENUM1 = 1,
  ENUM2 = 2
}