interface Count {
  count: number;
}

interface MultiQueryResult {
  name: string;
  results: Array<bytes>;
  count: number;
}

interface MultiQueryResultArray {
  result: Array<MultiQueryResult>;
}

interface AchievementResult {
  achievements: Array<Achievement>;
}

interface Achievement {
  id: number;
  achievementIcon: AchievementIcon;
  category: AchievementCategoryEnum;
  createdAt: number;
  description: string;
  externalId: string;
  game: Game;
  language: RegionLanguageEnum;
  name: string;
  owners: number;
  ownersPercentage: number;
  rank: AchievementRankEnum;
  slug: string;
  tags: Array<number>;
  updatedAt: number;
}

interface AchievementIconResult {
  achievementicons: Array<AchievementIcon>;
}

interface AchievementIcon {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface AgeRatingResult {
  ageratings: Array<AgeRating>;
}

interface AgeRating {
  id: number;
  category: AgeRatingCategoryEnum;
  contentDescriptions: Array<AgeRatingContentDescription>;
  rating: AgeRatingRatingEnum;
  ratingCoverUrl: string;
  synopsis: string;
}

interface AgeRatingContentDescriptionResult {
  ageratingcontentdescriptions: Array<AgeRatingContentDescription>;
}

interface AgeRatingContentDescription {
  id: number;
  category: AgeRatingRatingEnum;
  description: string;
}

interface AlternativeNameResult {
  alternativenames: Array<AlternativeName>;
}

interface AlternativeName {
  id: number;
  comment: string;
  game: Game;
  name: string;
}

interface ApiTokenResult {
  apitokens: Array<ApiToken>;
}

interface ApiToken {
  id: number;
  createdAt: number;
  expiresIn: number;
  token: string;
  user: number;
}

interface ArtworkResult {
  artworks: Array<Artwork>;
}

interface Artwork {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  game: Game;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface CharacterResult {
  characters: Array<Character>;
}

interface Character {
  id: number;
  akas: Array<string>;
  countryName: string;
  createdAt: number;
  description: string;
  games: Array<Game>;
  gender: GenderGenderEnum;
  mugShot: CharacterMugShot;
  name: string;
  people: Array<Person>;
  slug: string;
  species: CharacterSpeciesEnum;
  updatedAt: number;
  url: string;
}

interface CharacterMugShotResult {
  charactermugshots: Array<CharacterMugShot>;
}

interface CharacterMugShot {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface CollectionResult {
  collections: Array<Collection>;
}

interface Collection {
  id: number;
  createdAt: number;
  games: Array<Game>;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface CompanyResult {
  companies: Array<Company>;
}

interface Company {
  id: number;
  changeDate: number;
  changeDateCategory: DateFormatStartDateCategoryEnum;
  changedCompanyId: Company;
  country: number;
  createdAt: number;
  description: string;
  developed: Array<Game>;
  logo: CompanyLogo;
  name: string;
  parent: Company;
  published: Array<Game>;
  slug: string;
  startDate: number;
  startDateCategory: DateFormatStartDateCategoryEnum;
  updatedAt: number;
  url: string;
  websites: Array<CompanyWebsite>;
}

interface CompanyLogoResult {
  companylogos: Array<CompanyLogo>;
}

interface CompanyLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface CompanyWebsiteResult {
  companywebsites: Array<CompanyWebsite>;
}

interface CompanyWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

interface CoverResult {
  covers: Array<Cover>;
}

interface Cover {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  game: Game;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface CreditResult {
  credits: Array<Credit>;
}

interface Credit {
  id: number;
  category: CreditCategoryEnum;
  character: Character;
  characterCreditedName: string;
  comment: string;
  company: Company;
  country: number;
  createdAt: number;
  creditedName: string;
  game: Game;
  person: Person;
  personTitle: Title;
  position: number;
  updatedAt: number;
}

interface ExternalGameResult {
  externalgames: Array<ExternalGame>;
}

interface ExternalGame {
  id: number;
  category: ExternalGameCategoryEnum;
  createdAt: number;
  game: Game;
  name: string;
  uid: string;
  updatedAt: number;
  url: string;
  year: number;
}

interface FeedResult {
  feeds: Array<Feed>;
}

interface Feed {
  id: number;
  category: FeedCategoryEnum;
  content: string;
  createdAt: number;
  feedLikesCount: number;
  feedVideo: GameVideo;
  games: Array<Game>;
  meta: string;
  publishedAt: number;
  pulse: Pulse;
  slug: string;
  title: string;
  uid: string;
  updatedAt: number;
  url: string;
  user: number;
}

interface FeedFollowResult {
  feedfollows: Array<FeedFollow>;
}

interface FeedFollow {
  id: number;
  createdAt: number;
  feed: FeedCategoryEnum;
  publishedAt: number;
  updatedAt: number;
  user: User;
}

interface FollowResult {
  follows: Array<Follow>;
}

interface Follow {
  id: number;
  game: Game;
  user: User;
}

interface FranchiseResult {
  franchises: Array<Franchise>;
}

interface Franchise {
  id: number;
  createdAt: number;
  games: Array<Game>;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface GameResult {
  games: Array<Game>;
}

interface Game {
  id: number;
  ageRatings: Array<AgeRating>;
  aggregatedRating: number;
  aggregatedRatingCount: number;
  alternativeNames: Array<AlternativeName>;
  artworks: Array<Artwork>;
  bundles: Array<Game>;
  category: GameCategoryEnum;
  collection: Collection;
  cover: Cover;
  createdAt: number;
  dlcs: Array<Game>;
  expansions: Array<Game>;
  externalGames: Array<ExternalGame>;
  firstReleaseDate: number;
  follows: number;
  franchise: Franchise;
  franchises: Array<Franchise>;
  gameEngines: Array<GameEngine>;
  gameModes: Array<GameMode>;
  genres: Array<Genre>;
  hypes: number;
  involvedCompanies: Array<InvolvedCompany>;
  keywords: Array<Keyword>;
  multiplayerModes: Array<MultiplayerMode>;
  name: string;
  parentGame: Game;
  platforms: Array<Platform>;
  playerPerspectives: Array<PlayerPerspective>;
  popularity: number;
  pulseCount: number;
  rating: number;
  ratingCount: number;
  releaseDates: Array<ReleaseDate>;
  screenshots: Array<Screenshot>;
  similarGames: Array<Game>;
  slug: string;
  standaloneExpansions: Array<Game>;
  status: GameStatusEnum;
  storyline: string;
  summary: string;
  tags: Array<number>;
  themes: Array<Theme>;
  timeToBeat: TimeToBeat;
  totalRating: number;
  totalRatingCount: number;
  updatedAt: number;
  url: string;
  versionParent: Game;
  versionTitle: string;
  videos: Array<GameVideo>;
  websites: Array<Website>;
}

interface GameEngineResult {
  gameengines: Array<GameEngine>;
}

interface GameEngine {
  id: number;
  companies: Array<Company>;
  createdAt: number;
  description: string;
  logo: GameEngineLogo;
  name: string;
  platforms: Array<Platform>;
  slug: string;
  updatedAt: number;
  url: string;
}

interface GameEngineLogoResult {
  gameenginelogos: Array<GameEngineLogo>;
}

interface GameEngineLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface GameModeResult {
  gamemodes: Array<GameMode>;
}

interface GameMode {
  id: number;
  createdAt: number;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface GameVersionResult {
  gameversions: Array<GameVersion>;
}

interface GameVersion {
  id: number;
  createdAt: number;
  features: Array<GameVersionFeature>;
  game: Game;
  games: Array<Game>;
  updatedAt: number;
  url: string;
}

interface GameVersionFeatureResult {
  gameversionfeatures: Array<GameVersionFeature>;
}

interface GameVersionFeature {
  id: number;
  category: GameVersionFeatureCategoryEnum;
  description: string;
  position: number;
  title: string;
  values: Array<GameVersionFeatureValue>;
}

interface GameVersionFeatureValueResult {
  gameversionfeaturevalues: Array<GameVersionFeatureValue>;
}

interface GameVersionFeatureValue {
  id: number;
  game: Game;
  gameFeature: GameVersionFeature;
  includedFeature: GameVersionFeatureValueIncludedFeatureEnum;
  note: string;
}

interface GameVideoResult {
  gamevideos: Array<GameVideo>;
}

interface GameVideo {
  id: number;
  game: Game;
  name: string;
  videoId: string;
}

interface GenreResult {
  genres: Array<Genre>;
}

interface Genre {
  id: number;
  createdAt: number;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface InvolvedCompanyResult {
  involvedcompanies: Array<InvolvedCompany>;
}

interface InvolvedCompany {
  id: number;
  company: Company;
  createdAt: number;
  developer: boolean;
  game: Game;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
  updatedAt: number;
}

interface KeywordResult {
  keywords: Array<Keyword>;
}

interface Keyword {
  id: number;
  createdAt: number;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface ListResult {
  lists: Array<List>;
}

interface List {
  id: number;
  createdAt: number;
  description: string;
  entriesCount: number;
  listEntries: Array<ListEntry>;
  listTags: Array<number>;
  listedGames: Array<Game>;
  name: string;
  numbering: boolean;
  private: boolean;
  similarLists: Array<List>;
  slug: string;
  updatedAt: number;
  url: string;
  user: User;
}

interface ListEntryResult {
  listentries: Array<ListEntry>;
}

interface ListEntry {
  id: number;
  description: string;
  game: Game;
  list: List;
  platform: Platform;
  position: number;
  private: boolean;
  user: User;
}

interface MultiplayerModeResult {
  multiplayermodes: Array<MultiplayerMode>;
}

interface MultiplayerMode {
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

interface PageResult {
  pages: Array<Page>;
}

interface Page {
  id: number;
  background: PageBackground;
  battlenet: string;
  category: PageCategoryEnum;
  color: ColorColorEnum;
  company: Company;
  country: number;
  createdAt: number;
  description: string;
  feed: Feed;
  game: Game;
  name: string;
  origin: string;
  pageFollowsCount: number;
  pageLogo: PageLogo;
  slug: string;
  subCategory: PageSubCategoryEnum;
  updatedAt: number;
  uplay: string;
  url: string;
  user: User;
  websites: Array<PageWebsite>;
}

interface PageBackgroundResult {
  pagebackgrounds: Array<PageBackground>;
}

interface PageBackground {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface PageLogoResult {
  pagelogos: Array<PageLogo>;
}

interface PageLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface PageWebsiteResult {
  pagewebsites: Array<PageWebsite>;
}

interface PageWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

interface PersonResult {
  people: Array<Person>;
}

interface Person {
  id: number;
  bio: string;
  characters: Array<Character>;
  country: number;
  createdAt: number;
  creditedGames: Array<Game>;
  description: string;
  dob: number;
  gender: GenderGenderEnum;
  lovesCount: number;
  mugShot: PersonMugShot;
  name: string;
  nicknames: Array<string>;
  parent: Person;
  slug: string;
  updatedAt: number;
  url: string;
  voiceActed: Array<Game>;
  websites: Array<PersonWebsite>;
}

interface PersonMugShotResult {
  personmugshots: Array<PersonMugShot>;
}

interface PersonMugShot {
  id: number;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface PersonWebsiteResult {
  personwebsites: Array<PersonWebsite>;
}

interface PersonWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

interface PlatformResult {
  platforms: Array<Platform>;
}

interface Platform {
  id: number;
  abbreviation: string;
  alternativeName: string;
  category: PlatformCategoryEnum;
  createdAt: number;
  generation: number;
  name: string;
  platformLogo: PlatformLogo;
  productFamily: ProductFamily;
  slug: string;
  summary: string;
  updatedAt: number;
  url: string;
  versions: Array<PlatformVersion>;
  websites: Array<PlatformWebsite>;
}

interface PlatformLogoResult {
  platformlogos: Array<PlatformLogo>;
}

interface PlatformLogo {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface PlatformVersionResult {
  platformversions: Array<PlatformVersion>;
}

interface PlatformVersion {
  id: number;
  companies: Array<PlatformVersionCompany>;
  connectivity: string;
  cpu: string;
  graphics: string;
  mainManufacturer: PlatformVersionCompany;
  media: string;
  memory: string;
  name: string;
  online: string;
  os: string;
  output: string;
  platformLogo: PlatformLogo;
  platformVersionReleaseDates: Array<PlatformVersionReleaseDate>;
  resolutions: string;
  slug: string;
  sound: string;
  storage: string;
  summary: string;
  url: string;
}

interface PlatformVersionCompanyResult {
  platformversioncompanies: Array<PlatformVersionCompany>;
}

interface PlatformVersionCompany {
  id: number;
  comment: string;
  company: Company;
  developer: boolean;
  manufacturer: boolean;
}

interface PlatformVersionReleaseDateResult {
  platformversionreleasedates: Array<PlatformVersionReleaseDate>;
}

interface PlatformVersionReleaseDate {
  id: number;
  category: DateFormatStartDateCategoryEnum;
  createdAt: number;
  date: number;
  human: string;
  m: number;
  platformVersion: PlatformVersion;
  region: RegionLanguageEnum;
  updatedAt: number;
  y: number;
}

interface PlatformWebsiteResult {
  platformwebsites: Array<PlatformWebsite>;
}

interface PlatformWebsite {
  id: number;
  category: WebsiteCategoryEnum;
  trusted: boolean;
  url: string;
}

interface PlayerPerspectiveResult {
  playerperspectives: Array<PlayerPerspective>;
}

interface PlayerPerspective {
  id: number;
  createdAt: number;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface ProductFamilyResult {
  productfamilies: Array<ProductFamily>;
}

interface ProductFamily {
  id: number;
  name: string;
  slug: string;
}

interface PulseResult {
  pulses: Array<Pulse>;
}

interface Pulse {
  id: number;
  author: string;
  category: number;
  createdAt: number;
  ignored: boolean;
  image: string;
  publishedAt: number;
  pulseImage: PulseImage;
  pulseSource: PulseSource;
  summary: string;
  tags: Array<number>;
  title: string;
  uid: string;
  updatedAt: number;
  videos: Array<string>;
  website: PulseUrl;
}

interface PulseGroupResult {
  pulsegroups: Array<PulseGroup>;
}

interface PulseGroup {
  id: number;
  createdAt: number;
  game: Game;
  name: string;
  publishedAt: number;
  pulses: Array<Pulse>;
  tags: Array<number>;
  updatedAt: number;
}

interface PulseImageResult {
  pulseimages: Array<PulseImage>;
}

interface PulseImage {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface PulseSourceResult {
  pulsesources: Array<PulseSource>;
}

interface PulseSource {
  id: number;
  game: Game;
  name: string;
  page: Page;
}

interface PulseUrlResult {
  pulseurls: Array<PulseUrl>;
}

interface PulseUrl {
  id: number;
  trusted: boolean;
  url: string;
}

interface RateResult {
  rates: Array<Rate>;
}

interface Rate {
  id: number;
  game: Game;
  rating: number;
  user: User;
}

interface ReleaseDateResult {
  releasedates: Array<ReleaseDate>;
}

interface ReleaseDate {
  id: number;
  category: DateFormatStartDateCategoryEnum;
  createdAt: number;
  date: number;
  game: Game;
  human: string;
  m: number;
  platform: Platform;
  region: RegionLanguageEnum;
  updatedAt: number;
  y: number;
}

interface ReviewResult {
  reviews: Array<Review>;
}

interface Review {
  id: number;
  category: ReviewCategoryEnum;
  conclusion: string;
  content: string;
  createdAt: number;
  game: Game;
  introduction: string;
  likes: number;
  negativePoints: string;
  platform: Platform;
  positivePoints: string;
  slug: string;
  title: string;
  updatedAt: number;
  url: string;
  user: User;
  userRating: Rate;
  video: ReviewVideo;
  views: number;
}

interface ReviewVideoResult {
  reviewvideos: Array<ReviewVideo>;
}

interface ReviewVideo {
  id: number;
  trusted: boolean;
  url: string;
}

interface ScreenshotResult {
  screenshots: Array<Screenshot>;
}

interface Screenshot {
  id: number;
  alphaChannel: boolean;
  animated: boolean;
  game: Game;
  height: number;
  imageId: string;
  url: string;
  width: number;
}

interface SearchResult {
  searches: Array<Search>;
}

interface Search {
  id: number;
  alternativeName: string;
  character: Character;
  collection: Collection;
  company: Company;
  description: string;
  game: Game;
  name: string;
  person: Person;
  platform: Platform;
  popularity: number;
  publishedAt: number;
  testDummy: TestDummy;
  theme: Theme;
}

interface SocialMetricResult {
  socialmetrics: Array<SocialMetric>;
}

interface SocialMetric {
  id: number;
  category: SocialMetricCategoryEnum;
  createdAt: number;
  socialMetricSource: SocialMetricSource;
  value: number;
}

interface SocialMetricSourceResult {
  socialmetricsources: Array<SocialMetricSource>;
}

interface SocialMetricSource {
  id: number;
  category: number;
  channel: string;
  channelTitle: string;
  createdAt: number;
  duration: number;
  externalId: string;
  game: Game;
  internalName: string;
  meta: string;
  metricTags: Array<string>;
  publishedAt: number;
  socialMetrics: Array<SocialMetric>;
  socialNetwork: SocialMetricSourceSocialNetworkEnum;
  title: string;
  updatedAt: number;
  url: string;
}

interface TestDummyResult {
  testdummies: Array<TestDummy>;
}

interface TestDummy {
  id: number;
  boolValue: boolean;
  createdAt: number;
  enumTest: TestDummyEnumTestEnum;
  floatValue: number;
  game: Game;
  integerArray: Array<number>;
  integerValue: number;
  name: string;
  newIntegerValue: number;
  private: boolean;
  slug: string;
  stringArray: Array<string>;
  testDummies: Array<TestDummy>;
  testDummy: TestDummy;
  updatedAt: number;
  url: string;
  user: User;
}

interface ThemeResult {
  themes: Array<Theme>;
}

interface Theme {
  id: number;
  createdAt: number;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface TimeToBeatResult {
  timetobeats: Array<TimeToBeat>;
}

interface TimeToBeat {
  id: number;
  completely: number;
  game: Game;
  hastly: number;
  normally: number;
}

interface TitleResult {
  titles: Array<Title>;
}

interface Title {
  id: number;
  createdAt: number;
  description: string;
  games: Array<Game>;
  name: string;
  slug: string;
  updatedAt: number;
  url: string;
}

interface UserResult {
  users: Array<User>;
}

interface User {
  id: number;
  battlenet: string;
  color: ColorColorEnum;
  createdAt: number;
  discord: string;
  facebook: string;
  googlePlus: string;
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
  updatedAt: number;
  uplay: string;
  url: string;
  username: string;
  youtube: string;
}

interface WebsiteResult {
  websites: Array<Website>;
}

interface Website {
  id: number;
  category: WebsiteCategoryEnum;
  game: Game;
  trusted: boolean;
  url: string;
}


enum AchievementCategoryEnum {
  ACHIEVEMENT_CATEGORY_NULL = 0,
  PLAYSTATION = 1,
  XBOX = 2,
  STEAM = 3
}

enum RegionLanguageEnum {
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

enum AchievementRankEnum {
  ACHIEVEMENT_RANK_NULL = 0,
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3,
  PLATINUM = 4
}

enum AgeRatingCategoryEnum {
  AGERATING_CATEGORY_NULL = 0,
  ESRB = 1,
  PEGI = 2
}

enum AgeRatingRatingEnum {
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

enum GenderGenderEnum {
  GENDER_GENDER_NULL = 0,
  MALE = 1,
  FEMALE = 2,
  OTHER = 3
}

enum CharacterSpeciesEnum {
  CHARACTER_SPECIES_NULL = 0,
  HUMAN = 1,
  ALIEN = 2,
  ANIMAL = 3,
  ANDROID = 4,
  UNKNOWN = 5
}

enum DateFormatStartDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7
}

enum WebsiteCategoryEnum {
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

enum CreditCategoryEnum {
  CREDIT_CATEGORY_NULL = 0,
  VOICE_ACTOR = 1,
  LANGUAGE = 2,
  COMPANY_CREDIT = 3,
  EMPLOYEE = 4,
  MISC = 5,
  SUPPORT_COMPANY = 6
}

enum ExternalGameCategoryEnum {
  EXTERNALGAME_CATEGORY_NULL = 0,
  EXTERNALGAME_STEAM = 1,
  EXTERNALGAME_GOG = 5,
  EXTERNALGAME_YOUTUBE = 10,
  EXTERNALGAME_MICROSOFT = 11,
  EXTERNALGAME_APPLE = 13,
  EXTERNALGAME_TWITCH = 14,
  EXTERNALGAME_ANDROID = 15
}

enum FeedCategoryEnum {
  FEED_CATEGORY_NULL = 0,
  PULSE_ARTICLE = 1,
  COMING_SOON = 2,
  NEW_TRAILER = 3,
  USER_CONTRIBUTED_ITEM = 5,
  USER_CONTRIBUTIONS_ITEM = 6,
  PAGE_CONTRIBUTED_ITEM = 7
}

enum GameCategoryEnum {
  MAIN_GAME = 0,
  DLC_ADDON = 1,
  EXPANSION = 2,
  BUNDLE = 3,
  STANDALONE_EXPANSION = 4
}

enum GameStatusEnum {
  RELEASED = 0,
  ALPHA = 2,
  BETA = 3,
  EARLY_ACCESS = 4,
  OFFLINE = 5,
  CANCELLED = 6
}

enum GameVersionFeatureCategoryEnum {
  BOOLEAN = 0,
  DESCRIPTION = 1
}

enum GameVersionFeatureValueIncludedFeatureEnum {
  NOT_INCLUDED = 0,
  INCLUDED = 1,
  PRE_ORDER_ONLY = 2
}

enum PageCategoryEnum {
  PAGE_CATEGORY_NULL = 0,
  PERSONALITY = 1,
  MEDIA_ORGANIZATION = 2,
  CONTENT_CREATOR = 3,
  CLAN_TEAM = 4
}

enum ColorColorEnum {
  GREEN = 0,
  BLUE = 1,
  RED = 2,
  ORANGE = 3,
  PINK = 4,
  YELLOW = 5
}

enum PageSubCategoryEnum {
  PAGE_SUB_CATEGORY_NULL = 0,
  USER = 1,
  GAME = 2,
  COMPANY = 3,
  CONSUMER = 4,
  INDUSTRY = 5,
  E_SPORTS = 6
}

enum PlatformCategoryEnum {
  PLATFORM_CATEGORY_NULL = 0,
  CONSOLE = 1,
  ARCADE = 2,
  PLATFORM = 3,
  OPERATING_SYSTEM = 4,
  PORTABLE_CONSOLE = 5,
  COMPUTER = 6
}

enum ReviewCategoryEnum {
  REVIEW_CATEGORY_NULL = 0,
  TEXT = 1,
  VIDEO = 2
}

enum SocialMetricCategoryEnum {
  SOCIALMETRIC_CATEGORY_NULL = 0,
  FOLLOWS = 1,
  LIKES = 2,
  HATES = 3,
  SHARES = 4,
  VIEW = 5,
  COMMENTS = 6,
  FAVORITES = 7
}

enum SocialMetricSourceSocialNetworkEnum {
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

enum TestDummyEnumTestEnum {
  TESTDUMMY_ENUM_TEST_NULL = 0,
  ENUM1 = 1,
  ENUM2 = 2
}

enum UserRoleEnum {
  USER_ROLE_NULL = 0,
  USER_USER = 1,
  USER_ADVANCED_USER = 2,
  USER_SUPER_ADVANCED_USER = 3,
  USER_KEEPER = 4,
  USER_ADMIN = 9,
  USER_SUPER_ADMIN = 10
}