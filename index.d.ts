export interface Count {
  count: number;
}

export interface MultiQueryResult {
  name: string;
  results: Array<any>;
  count: number;
}

export interface MultiQueryResultArray {
  result: Array<MultiQueryResult>;
}

export interface AchievementResult {
  achievements: Array<Achievement>;
}

export interface Achievement {
  id: number;
  achievement_icon: AchievementIcon;
  category: AchievementCategoryEnum;
  created_at: number;
  description: string;
  external_id: string;
  game: Game;
  language: RegionLanguageEnum;
  name: string;
  owners: number;
  owners_percentage: number;
  rank: AchievementRankEnum;
  slug: string;
  tags: Array<number>;
  updated_at: number;
}

export interface AchievementIconResult {
  achievementicons: Array<AchievementIcon>;
}

export interface AchievementIcon {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface AgeRatingResult {
  ageratings: Array<AgeRating>;
}

export interface AgeRating {
  id: number;
  category: AgeRatingCategoryEnum;
  content_descriptions: Array<AgeRatingContentDescription>;
  rating: AgeRatingRatingEnum;
  rating_cover_url: string;
  synopsis: string;
}

export interface AgeRatingContentDescriptionResult {
  ageratingcontentdescriptions: Array<AgeRatingContentDescription>;
}

export interface AgeRatingContentDescription {
  id: number;
  category: AgeRatingRatingEnum;
  description: string;
}

export interface AlternativeNameResult {
  alternativenames: Array<AlternativeName>;
}

export interface AlternativeName {
  id: number;
  comment: string;
  game: Game;
  name: string;
}

export interface ApiTokenResult {
  apitokens: Array<ApiToken>;
}

export interface ApiToken {
  id: number;
  created_at: number;
  expires_in: number;
  token: string;
  user: number;
}

export interface ArtworkResult {
  artworks: Array<Artwork>;
}

export interface Artwork {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: Game;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface CharacterResult {
  characters: Array<Character>;
}

export interface Character {
  id: number;
  akas: Array<string>;
  country_name: string;
  created_at: number;
  description: string;
  games: Array<Game>;
  gender: GenderGenderEnum;
  mug_shot: CharacterMugShot;
  name: string;
  people: Array<Person>;
  slug: string;
  species: CharacterSpeciesEnum;
  updated_at: number;
  url: string;
}

export interface CharacterMugShotResult {
  charactermugshots: Array<CharacterMugShot>;
}

export interface CharacterMugShot {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface CollectionResult {
  collections: Array<Collection>;
}

export interface Collection {
  id: number;
  created_at: number;
  games: Array<Game>;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface CompanyResult {
  companies: Array<Company>;
}

export interface Company {
  id: number;
  change_date: number;
  change_date_category: DateFormatStartDateCategoryEnum;
  changed_company_id: Company;
  country: number;
  created_at: number;
  description: string;
  developed: Array<Game>;
  logo: CompanyLogo;
  name: string;
  parent: Company;
  published: Array<Game>;
  slug: string;
  start_date: number;
  start_date_category: DateFormatStartDateCategoryEnum;
  updated_at: number;
  url: string;
  websites: Array<CompanyWebsite>;
}

export interface CompanyLogoResult {
  companylogos: Array<CompanyLogo>;
}

export interface CompanyLogo {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface CompanyWebsiteResult {
  companywebsites: Array<CompanyWebsite>;
}

export interface CompanyWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

export interface CoverResult {
  covers: Array<Cover>;
}

export interface Cover {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: Game;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface CreditResult {
  credits: Array<Credit>;
}

export interface Credit {
  id: number;
  category: CreditCategoryEnum;
  character: Character;
  character_credited_name: string;
  comment: string;
  company: Company;
  country: number;
  created_at: number;
  credited_name: string;
  game: Game;
  person: Person;
  person_title: Title;
  position: number;
  updated_at: number;
}

export interface ExternalGameResult {
  externalgames: Array<ExternalGame>;
}

export interface ExternalGame {
  id: number;
  category: ExternalGameCategoryEnum;
  created_at: number;
  game: Game;
  name: string;
  uid: string;
  updated_at: number;
  url: string;
  year: number;
}

export interface FeedResult {
  feeds: Array<Feed>;
}

export interface Feed {
  id: number;
  category: FeedCategoryEnum;
  content: string;
  created_at: number;
  feed_likes_count: number;
  feed_video: GameVideo;
  games: Array<Game>;
  meta: string;
  published_at: number;
  pulse: Pulse;
  slug: string;
  title: string;
  uid: string;
  updated_at: number;
  url: string;
  user: number;
}

export interface FeedFollowResult {
  feedfollows: Array<FeedFollow>;
}

export interface FeedFollow {
  id: number;
  created_at: number;
  feed: FeedCategoryEnum;
  published_at: number;
  updated_at: number;
  user: User;
}

export interface FollowResult {
  follows: Array<Follow>;
}

export interface Follow {
  id: number;
  game: Game;
  user: User;
}

export interface FranchiseResult {
  franchises: Array<Franchise>;
}

export interface Franchise {
  id: number;
  created_at: number;
  games: Array<Game>;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface GameResult {
  games: Array<Game>;
}

export interface Game {
  id: number;
  age_ratings: Array<AgeRating>;
  aggregated_rating: number;
  aggregated_rating_count: number;
  alternative_names: Array<AlternativeName>;
  artworks: Array<Artwork>;
  bundles: Array<Game>;
  category: GameCategoryEnum;
  collection: Collection;
  cover: Cover;
  created_at: number;
  dlcs: Array<Game>;
  expansions: Array<Game>;
  external_games: Array<ExternalGame>;
  first_release_date: number;
  follows: number;
  franchise: Franchise;
  franchises: Array<Franchise>;
  game_engines: Array<GameEngine>;
  game_modes: Array<GameMode>;
  genres: Array<Genre>;
  hypes: number;
  involved_companies: Array<InvolvedCompany>;
  keywords: Array<Keyword>;
  multiplayer_modes: Array<MultiplayerMode>;
  name: string;
  parent_game: Game;
  platforms: Array<Platform>;
  player_perspectives: Array<PlayerPerspective>;
  popularity: number;
  pulse_count: number;
  rating: number;
  rating_count: number;
  release_dates: Array<ReleaseDate>;
  screenshots: Array<Screenshot>;
  similar_games: Array<Game>;
  slug: string;
  standalone_expansions: Array<Game>;
  status: GameStatusEnum;
  storyline: string;
  summary: string;
  tags: Array<number>;
  themes: Array<Theme>;
  time_to_beat: TimeToBeat;
  total_rating: number;
  total_rating_count: number;
  updated_at: number;
  url: string;
  version_parent: Game;
  version_title: string;
  videos: Array<GameVideo>;
  websites: Array<Website>;
}

export interface GameEngineResult {
  gameengines: Array<GameEngine>;
}

export interface GameEngine {
  id: number;
  companies: Array<Company>;
  created_at: number;
  description: string;
  logo: GameEngineLogo;
  name: string;
  platforms: Array<Platform>;
  slug: string;
  updated_at: number;
  url: string;
}

export interface GameEngineLogoResult {
  gameenginelogos: Array<GameEngineLogo>;
}

export interface GameEngineLogo {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface GameModeResult {
  gamemodes: Array<GameMode>;
}

export interface GameMode {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface GameVersionResult {
  gameversions: Array<GameVersion>;
}

export interface GameVersion {
  id: number;
  created_at: number;
  features: Array<GameVersionFeature>;
  game: Game;
  games: Array<Game>;
  updated_at: number;
  url: string;
}

export interface GameVersionFeatureResult {
  gameversionfeatures: Array<GameVersionFeature>;
}

export interface GameVersionFeature {
  id: number;
  category: GameVersionFeatureCategoryEnum;
  description: string;
  position: number;
  title: string;
  values: Array<GameVersionFeatureValue>;
}

export interface GameVersionFeatureValueResult {
  gameversionfeaturevalues: Array<GameVersionFeatureValue>;
}

export interface GameVersionFeatureValue {
  id: number;
  game: Game;
  game_feature: GameVersionFeature;
  included_feature: GameVersionFeatureValueIncludedFeatureEnum;
  note: string;
}

export interface GameVideoResult {
  gamevideos: Array<GameVideo>;
}

export interface GameVideo {
  id: number;
  game: Game;
  name: string;
  video_id: string;
}

export interface GenreResult {
  genres: Array<Genre>;
}

export interface Genre {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface InvolvedCompanyResult {
  involvedcompanies: Array<InvolvedCompany>;
}

export interface InvolvedCompany {
  id: number;
  company: Company;
  created_at: number;
  developer: boolean;
  game: Game;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
  updated_at: number;
}

export interface KeywordResult {
  keywords: Array<Keyword>;
}

export interface Keyword {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface ListResult {
  lists: Array<List>;
}

export interface List {
  id: number;
  created_at: number;
  description: string;
  entries_count: number;
  list_entries: Array<ListEntry>;
  list_tags: Array<number>;
  listed_games: Array<Game>;
  name: string;
  numbering: boolean;
  private: boolean;
  similar_lists: Array<List>;
  slug: string;
  updated_at: number;
  url: string;
  user: User;
}

export interface ListEntryResult {
  listentries: Array<ListEntry>;
}

export interface ListEntry {
  id: number;
  description: string;
  game: Game;
  list: List;
  platform: Platform;
  position: number;
  private: boolean;
  user: User;
}

export interface MultiplayerModeResult {
  multiplayermodes: Array<MultiplayerMode>;
}

export interface MultiplayerMode {
  id: number;
  campaigncoop: boolean;
  dropin: boolean;
  game: Game;
  lancoop: boolean;
  offlinecoop: boolean;
  offlinecoopmax: number;
  offlinemax: number;
  onlinecoop: boolean;
  onlinecoopmax: number;
  onlinemax: number;
  platform: Platform;
  splitscreen: boolean;
  splitscreenonline: boolean;
}

export interface PageResult {
  pages: Array<Page>;
}

export interface Page {
  id: number;
  background: PageBackground;
  battlenet: string;
  category: PageCategoryEnum;
  color: ColorColorEnum;
  company: Company;
  country: number;
  created_at: number;
  description: string;
  feed: Feed;
  game: Game;
  name: string;
  origin: string;
  page_follows_count: number;
  page_logo: PageLogo;
  slug: string;
  sub_category: PageCategoryEnum;
  updated_at: number;
  uplay: string;
  url: string;
  user: User;
  websites: Array<PageWebsite>;
}

export interface PageBackgroundResult {
  pagebackgrounds: Array<PageBackground>;
}

export interface PageBackground {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface PageLogoResult {
  pagelogos: Array<PageLogo>;
}

export interface PageLogo {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface PageWebsiteResult {
  pagewebsites: Array<PageWebsite>;
}

export interface PageWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

export interface PersonResult {
  people: Array<Person>;
}

export interface Person {
  id: number;
  bio: string;
  characters: Array<Character>;
  country: number;
  created_at: number;
  credited_games: Array<Game>;
  description: string;
  dob: number;
  gender: GenderGenderEnum;
  loves_count: number;
  mug_shot: PersonMugShot;
  name: string;
  nicknames: Array<string>;
  parent: Person;
  slug: string;
  updated_at: number;
  url: string;
  voice_acted: Array<Game>;
  websites: Array<PersonWebsite>;
}

export interface PersonMugShotResult {
  personmugshots: Array<PersonMugShot>;
}

export interface PersonMugShot {
  id: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface PersonWebsiteResult {
  personwebsites: Array<PersonWebsite>;
}

export interface PersonWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

export interface PlatformResult {
  platforms: Array<Platform>;
}

export interface Platform {
  id: number;
  abbreviation: string;
  alternative_name: string;
  category: PlatformCategoryEnum;
  created_at: number;
  generation: number;
  name: string;
  platform_logo: PlatformLogo;
  product_family: ProductFamily;
  slug: string;
  summary: string;
  updated_at: number;
  url: string;
  versions: Array<PlatformVersion>;
  websites: Array<PlatformWebsite>;
}

export interface PlatformLogoResult {
  platformlogos: Array<PlatformLogo>;
}

export interface PlatformLogo {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface PlatformVersionResult {
  platformversions: Array<PlatformVersion>;
}

export interface PlatformVersion {
  id: number;
  companies: Array<PlatformVersionCompany>;
  connectivity: string;
  cpu: string;
  graphics: string;
  main_manufacturer: PlatformVersionCompany;
  media: string;
  memory: string;
  name: string;
  online: string;
  os: string;
  output: string;
  platform_logo: PlatformLogo;
  platform_version_release_dates: Array<PlatformVersionReleaseDate>;
  resolutions: string;
  slug: string;
  sound: string;
  storage: string;
  summary: string;
  url: string;
}

export interface PlatformVersionCompanyResult {
  platformversioncompanies: Array<PlatformVersionCompany>;
}

export interface PlatformVersionCompany {
  id: number;
  comment: string;
  company: Company;
  developer: boolean;
  manufacturer: boolean;
}

export interface PlatformVersionReleaseDateResult {
  platformversionreleasedates: Array<PlatformVersionReleaseDate>;
}

export interface PlatformVersionReleaseDate {
  id: number;
  category: DateFormatStartDateCategoryEnum;
  created_at: number;
  date: number;
  human: string;
  m: number;
  platform_version: PlatformVersion;
  region: RegionLanguageEnum;
  updated_at: number;
  y: number;
}

export interface PlatformWebsiteResult {
  platformwebsites: Array<PlatformWebsite>;
}

export interface PlatformWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

export interface PlayerPerspectiveResult {
  playerperspectives: Array<PlayerPerspective>;
}

export interface PlayerPerspective {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface ProductFamilyResult {
  productfamilies: Array<ProductFamily>;
}

export interface ProductFamily {
  id: number;
  name: string;
  slug: string;
}

export interface PulseResult {
  pulses: Array<Pulse>;
}

export interface Pulse {
  id: number;
  author: string;
  category: number;
  created_at: number;
  ignored: boolean;
  image: string;
  published_at: number;
  pulse_image: string;
  pulse_source: PulseSource;
  summary: string;
  tags: Array<number>;
  title: string;
  uid: string;
  updated_at: number;
  videos: Array<string>;
  website: PulseUrl;
}

export interface PulseGroupResult {
  pulsegroups: Array<PulseGroup>;
}

export interface PulseGroup {
  id: number;
  created_at: number;
  game: Game;
  name: string;
  published_at: number;
  pulses: Array<Pulse>;
  tags: Array<number>;
  updated_at: number;
}

export interface PulseImageResult {
  pulseimages: Array<PulseImage>;
}

export interface PulseImage {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface PulseSourceResult {
  pulsesources: Array<PulseSource>;
}

export interface PulseSource {
  id: number;
  game: Game;
  name: string;
  page: Page;
}

export interface PulseUrlResult {
  pulseurls: Array<PulseUrl>;
}

export interface PulseUrl {
  id: number;
  trusted: boolean;
  url: string;
}

export interface RateResult {
  rates: Array<Rate>;
}

export interface Rate {
  id: number;
  game: Game;
  rating: number;
  user: User;
}

export interface ReleaseDateResult {
  releasedates: Array<ReleaseDate>;
}

export interface ReleaseDate {
  id: number;
  category: DateFormatStartDateCategoryEnum;
  created_at: number;
  date: number;
  game: Game;
  human: string;
  m: number;
  platform: Platform;
  region: RegionLanguageEnum;
  updated_at: number;
  y: number;
}

export interface ReviewResult {
  reviews: Array<Review>;
}

export interface Review {
  id: number;
  category: ReviewCategoryEnum;
  conclusion: string;
  content: string;
  created_at: number;
  game: Game;
  introduction: string;
  likes: number;
  negative_points: string;
  platform: Platform;
  positive_points: string;
  slug: string;
  title: string;
  updated_at: number;
  url: string;
  user: User;
  user_rating: Rate;
  video: ReviewVideo;
  views: number;
}

export interface ReviewVideoResult {
  reviewvideos: Array<ReviewVideo>;
}

export interface ReviewVideo {
  id: number;
  trusted: boolean;
  url: string;
}

export interface ScreenshotResult {
  screenshots: Array<Screenshot>;
}

export interface Screenshot {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: Game;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface SearchResult {
  searches: Array<Search>;
}

export interface Search {
  id: number;
  alternative_name: string;
  character: Character;
  collection: Collection;
  company: Company;
  description: string;
  game: Game;
  name: string;
  person: Person;
  platform: Platform;
  popularity: number;
  published_at: number;
  test_dummy: TestDummy;
  theme: Theme;
}

export interface SocialMetricResult {
  socialmetrics: Array<SocialMetric>;
}

export interface SocialMetric {
  id: number;
  category: SocialMetricCategoryEnum;
  created_at: number;
  social_metric_source: SocialMetricSource;
  value: number;
}

export interface SocialMetricSourceResult {
  socialmetricsources: Array<SocialMetricSource>;
}

export interface SocialMetricSource {
  id: number;
  category: number;
  channel: string;
  channel_title: string;
  created_at: number;
  duration: number;
  external_id: string;
  game: Game;
  internal_name: string;
  meta: string;
  metric_tags: Array<string>;
  published_at: number;
  social_metrics: Array<SocialMetric>;
  social_network: SocialMetricSourceSocialNetworkEnum;
  title: string;
  updated_at: number;
  url: string;
}

export interface TestDummyResult {
  testdummies: Array<TestDummy>;
}

export interface TestDummy {
  id: number;
  bool_value: boolean;
  created_at: number;
  enum_test: TestDummyEnumTestEnum;
  float_value: number;
  game: Game;
  integer_array: Array<number>;
  integer_value: number;
  name: string;
  new_integer_value: number;
  private: boolean;
  slug: string;
  string_array: Array<string>;
  test_dummies: Array<TestDummy>;
  test_dummy: TestDummy;
  updated_at: number;
  url: string;
  user: User;
}

export interface ThemeResult {
  themes: Array<Theme>;
}

export interface Theme {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface TimeToBeatResult {
  timetobeats: Array<TimeToBeat>;
}

export interface TimeToBeat {
  id: number;
  completely: number;
  game: Game;
  hastly: number;
  normally: number;
}

export interface TitleResult {
  titles: Array<Title>;
}

export interface Title {
  id: number;
  created_at: number;
  description: string;
  games: Array<Game>;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface UserResult {
  users: Array<User>;
}

export interface User {
  id: number;
  battlenet: string;
  color: ColorColorEnum;
  created_at: number;
  discord: string;
  facebook: string;
  google_plus: string;
  instagram: string;
  linkedin: string;
  origin: string;
  pinterest: string;
  presentation: string;
  reddit: string;
  role: UserRoleEnum;
  slug: string;
  soundcloud: string;
  steam: string;
  twitch: string;
  twitter: string;
  updated_at: number;
  uplay: string;
  url: string;
  username: string;
  youtube: string;
}

export interface WebsiteResult {
  websites: Array<Website>;
}

export interface Website {
  id: number;
  category: WebsiteCategoryEnum;
  game: Game;
  trusted: boolean;
  url: string;
}


export enum AchievementCategoryEnum {
  ACHIEVEMENT_CATEGORY_NULL = 0,
  PLAYSTATION = 1,
  XBOX = 2,
  STEAM = 3
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
  SOUTH_KOREA = 10
}

export enum AchievementRankEnum {
  ACHIEVEMENT_RANK_NULL = 0,
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3,
  PLATINUM = 4
}

export enum AgeRatingCategoryEnum {
  AGERATING_CATEGORY_NULL = 0,
  ESRB = 1,
  PEGI = 2
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
  AO = 12
}

export enum GenderGenderEnum {
  GENDER_GENDER_NULL = 0,
  MALE = 1,
  FEMALE = 2,
  OTHER = 3
}

export enum CharacterSpeciesEnum {
  CHARACTER_SPECIES_NULL = 0,
  HUMAN = 1,
  ALIEN = 2,
  ANIMAL = 3,
  ANDROID = 4,
  UNKNOWN = 5
}

export enum DateFormatStartDateCategoryEnum {
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
  WEBSITE_DISCORD = 15,
  WEBSITE_GOOGLE_PLUS = 16,
  WEBSITE_TUMBLR = 17,
  WEBSITE_LINKEDIN = 18,
  WEBSITE_PINTEREST = 19,
  WEBSITE_SOUNDCLOUD = 20
}

export enum CreditCategoryEnum {
  CREDIT_CATEGORY_NULL = 0,
  VOICE_ACTOR = 1,
  LANGUAGE = 2,
  COMPANY_CREDIT = 3,
  EMPLOYEE = 4,
  MISC = 5,
  SUPPORT_COMPANY = 6
}

export enum ExternalGameCategoryEnum {
  EXTERNALGAME_CATEGORY_NULL = 0,
  EXTERNALGAME_STEAM = 1,
  EXTERNALGAME_GOG = 5,
  EXTERNALGAME_YOUTUBE = 10,
  EXTERNALGAME_MICROSOFT = 11,
  EXTERNALGAME_APPLE = 13,
  EXTERNALGAME_TWITCH = 14,
  EXTERNALGAME_ANDROID = 15
}

export enum FeedCategoryEnum {
  FEED_CATEGORY_NULL = 0,
  PULSE_ARTICLE = 1,
  COMING_SOON = 2,
  NEW_TRAILER = 3,
  USER_CONTRIBUTED_ITEM = 5,
  USER_CONTRIBUTIONS_ITEM = 6,
  PAGE_CONTRIBUTED_ITEM = 7
}

export enum GameCategoryEnum {
  MAIN_GAME = 0,
  DLC_ADDON = 1,
  EXPANSION = 2,
  BUNDLE = 3,
  STANDALONE_EXPANSION = 4
}

export enum GameStatusEnum {
  RELEASED = 0,
  ALPHA = 2,
  BETA = 3,
  EARLY_ACCESS = 4,
  OFFLINE = 5,
  CANCELLED = 6
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

export enum PageCategoryEnum {
  PAGE_CATEGORY_NULL = 0,
  PERSONALITY = 1,
  MEDIA_ORGANIZATION = 2,
  CONTENT_CREATOR = 3,
  CLAN_TEAM = 4
}

export enum ColorColorEnum {
  GREEN = 0,
  BLUE = 1,
  RED = 2,
  ORANGE = 3,
  PINK = 4,
  YELLOW = 5
}

export enum PageSubCategoryEnum {
  PAGE_SUB_CATEGORY_NULL = 0,
  USER = 1,
  GAME = 2,
  COMPANY = 3,
  CONSUMER = 4,
  INDUSTRY = 5,
  E_SPORTS = 6
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

export enum ReviewCategoryEnum {
  REVIEW_CATEGORY_NULL = 0,
  TEXT = 1,
  VIDEO = 2
}

export enum SocialMetricCategoryEnum {
  SOCIALMETRIC_CATEGORY_NULL = 0,
  FOLLOWS = 1,
  LIKES = 2,
  HATES = 3,
  SHARES = 4,
  VIEW = 5,
  COMMENTS = 6,
  FAVORITES = 7
}

export enum SocialMetricSourceSocialNetworkEnum {
  SOCIALMETRICSOURCE_SOCIAL_NETWORK_NULL = 0,
  SOCIALMETRICSOURCE_OFFICIAL = 1,
  SOCIALMETRICSOURCE_WIKIA = 2,
  SOCIALMETRICSOURCE_WIKIPEDIA = 3,
  SOCIALMETRICSOURCE_FACEBOOK = 4,
  SOCIALMETRICSOURCE_TWITTER = 5,
  SOCIALMETRICSOURCE_TWITCH = 6,
  SOCIALMETRICSOURCE_INSTAGRAM = 8,
  SOCIALMETRICSOURCE_YOUTUBE = 9,
  SOCIALMETRICSOURCE_IPHONE = 10,
  SOCIALMETRICSOURCE_IPAD = 11,
  SOCIALMETRICSOURCE_ANDROID = 12,
  SOCIALMETRICSOURCE_STEAM = 13,
  SOCIALMETRICSOURCE_REDDIT = 14
}

export enum TestDummyEnumTestEnum {
  TESTDUMMY_ENUM_TEST_NULL = 0,
  ENUM1 = 1,
  ENUM2 = 2
}

export enum UserRoleEnum {
  USER_ROLE_NULL = 0,
  USER_USER = 1,
  USER_ADVANCED_USER = 2,
  USER_SUPER_ADVANCED_USER = 3,
  USER_KEEPER = 4,
  USER_ADMIN = 9,
  USER_SUPER_ADMIN = 10
}