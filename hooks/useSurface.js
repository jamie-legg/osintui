import { AtSymbolIcon, GlobeAltIcon, InboxIcon, InboxInIcon, PhotographIcon, ShoppingBagIcon } from "@heroicons/react/outline";

const defaultTarget = {
    name: 'jamie legg',
    username: '@jamie_legg_',
    profilePicUrl: "https://pbs.twimg.com/profile_images/1314596328199127040/gI4PBZe2.jpg",
    identities: [],
    availableSurfaces: [],
    vectors: 0,
}

const useSurface = () => {

    let currentTarget = defaultTarget;

    const getIdentityProviders = () => {
        return [
            { name: 'TikTok', surfaceKey: "tiktok", iconPath: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
            { name: 'Instagram', surfaceKey: "insta", iconPath: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" },
            { name: 'Reddit', surfaceKey: "reddit", iconPath: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" },
            { name: 'LinkedIn', surfaceKey: "linkedin", iconPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            { name: 'Twitter', surfaceKey: "twitter", iconPath: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
            { name: 'YouTube', surfaceKey: "youtube", iconPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
            { name: 'Tumblr', surfaceKey: "tumblr", iconPath: "M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z" },
            { name: 'Facebook', surfaceKey: [], iconPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
            { name: 'Pinterest', surfaceKey: [], iconPath: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" },
            { name: 'Skype', surfaceKey: [], iconPath: "M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91.274 7.829 0 6.731 0c-1.789 0-3.47.698-4.736 1.967C.729 3.235.032 4.923.032 6.716c0 1.143.292 2.265.844 3.258l.02-.124.041.239-.06-.115c-.114.645-.172 1.299-.172 1.955 0 1.53.3 3.017.884 4.416.568 1.362 1.378 2.576 2.427 3.609 1.034 1.05 2.247 1.857 3.595 2.442 1.394.6 2.877.898 4.404.898.659 0 1.334-.06 1.977-.179l-.119-.062.24.046-.135.03c1.002.569 2.126.871 3.294.871 1.783 0 3.459-.69 4.733-1.963 1.259-1.259 1.962-2.951 1.962-4.749 0-1.138-.299-2.262-.853-3.266" }]
    };
    

    const getOtherSurfaces = () => {
        return [{ name: 'Web', surfaceKey: [], icon:GlobeAltIcon },
        { name: 'Username', surfaceKey: [], icon:AtSymbolIcon },
        { name: 'Image', surfaceKey: [], icon:PhotographIcon },
        { name: 'Email', surfaceKey: [], icon:InboxInIcon },
        { name: 'DWM', surfaceKey: [], icon:ShoppingBagIcon }
        ]
    };

    const addSurfaceToTarget = (provider) => {
        console.log("ADDING");
        //get surface from surfaceMap
        const { surface } = surfaceMap.find(s => s.key === provider.surfaceKey);
        // check if surface is already on target
        surface.forEach(s => {
            const targetSurface = currentTarget.availableSurfaces.find(as => as.key === s);
            if (targetSurface) {
                targetSurface.priority += 1;
            } else {
                currentTarget.availableSurfaces.push({
                    key: s,
                    priority: 1
                });
            }
        });
        return currentTarget
    };

    const removeSurfaceFromTarget = (provider) => {
        console.log("REMOVING");
        // find the relevant surfaces on the target and lower their priority, if priority is 0 remove
        const { surface } = surfaceMap.find(s => s.key === provider.surfaceKey);
        surface.forEach(s => {
            const targetSurface = currentTarget.availableSurfaces.find(as => as.key === s);
            if (targetSurface) {
                targetSurface.priority -= 1;
                if (targetSurface.priority === 0) {
                    currentTarget.availableSurfaces.splice(currentTarget.availableSurfaces.indexOf(targetSurface), 1);
                }
            }
        });
        return currentTarget
    };

    const getCurrentTarget = () => {
        return currentTarget;
    };

    const getDefaultTarget = () => {
        return defaultTarget;
    };

    const getProviderSurfaces = (provider) => {
        const surface = surfaceMap.find(s => s.key === provider.surfaceKey)
        return surface? surface.surface : [];
    };

    //? SURFACE MAP WITH UNIQUE KEYS
    const surfaceMap = [
            {
                key:"dwm",
                name:"DWM",
                surface: [
                    "market", "vendor"
                ],
            },
            {
                key: "market",
                name: "Marketplace",
                surface: [
                    "onionUrl", "source", "favicon", "email", "headers", "wallets", "key"
                ],
            },
            {
                key: "vendor",
                name: "Vendor",
                surface: [
                    "key", "email", "username", "join", "location", "contact", "shipping", "posts", "images", "storeDescription", "sales", "products"
                ],
            },
            {
                key: "onionUrl",
                name: "Onion URL",
                surface: [],
            },
            {
                key: "source",
                name: "Source Code",
                surface: [],
            },
            {
                key: "favicon",
                name: "Favicon",
                surface: [],
            },
            //! EMAIL SURFACE
            {
                key: "emailAddr",
                name: "Email Address",
                surface: ["username", "domain", "search"],
            },
            {
                key: "headers",
                name: "HTTP Headers",
                surface: [],
            },
            {
                key: "wallets",
                name: "Crypto Wallets",
                surface: [],
            },
            {
                key: "key",
                name: "PGP Keys",
                surface: ["emailAddr"],
            },
            //! USERNAME SURFACE
            {
                key: "username",
                name: "Username",
                surface: [],
            },
            {
                key: "join",
                name: "Join Date",
                surface: [],
            },
            {
                key: "location",
                name: "Location",
                surface: [],
            },
            {
                key: "contact",
                name: "Contact Information",
                surface: [],
            },
            {
                key: "shipping",
                name: "Shipping Information",
                surface: [],
            },
            {
                key: "posts",
                name: "Forum Posts",
                surface: [],
            },
            {
                key: "images",
                name: "Photo(s)",
                surface: ["metadata", "adjustedImage", "lens", "reverseSearch", "uploadTime", "stego", "hash", "captions", "manipulationDetection", "fileName", "exif", "photoContentAnalysis", "enhancements"],
            },
            {
                key: "adjustedImage",
                name: "Adjusted Image",
                surface: ["lens, reverseSearch"],
            },
            {
                key: "lens",
                name: "Google Lens",
                surface: [],
            },
            {
                key: "reverseSearch",
                name: "Reverse Image Search",
                surface: [],
            },
            {
                key: "uploadTime",
                name: "Upload Time",
                surface: [],
            },
            {
                key: "stego",
                name: "Steganography",
                surface: [],
            },
            {
                key: "hash",
                name: "Hash Value",
                surface: [],
            },
            {
                key: "captions",
                name: "Captions",
                surface: [],
            },
            {
                key: "manipulationDetection",
                name: "Manipulation Detection",
                surface: ["foto", "manual"],
            },
            {
                key: "fileName",
                name: "File Name",
                surface: ["generalSearch", "knownDefaults"],
            },
            {
                key: "exif",
                name: "EXIF Data",
                surface: ["hardware", "software", "gps"],
            },
            {
                key: "photoContentAnalysis",
                name: "Content Analysis",
                surface: ["manualGeolocation","objectIdentification", "personIdentification"],
            },
            {
                key: "enhancements",
                name: "Enhancements",
                surface: ["photoContentAnalysis"],
            },
            {
                key: "generalSearch",
                name: "General Search",
                surface: [],
            },
            {
                key: "knownDefaults",
                name: "Known Defaults",
                surface: ["hardware", "software"],
            },
            {
                key: "hardware",
                name: "Hardware Info",
                surface: [],
            },
            {
                key: "software",
                name: "Software Info",
                surface: [],
            },
            {
                key: "gps",
                name: "GPS Data",
                surface: ["map", "street"],
            },
            {
                key: "map",
                name: "Map View",
                surface: [],
            },
            {
                key: "street",
                name: "Street View",
                surface: [],
            },
            {
                key: "manualGeolocation",
                name: "Manual Geolocation",
                surface: ["map", "street"],
            },
            {
                key: "objectIdentification",
                name: "Object Identification",
                surface: [],
            },
            {
                key: "personIdentification",
                name: "Person Identification",
                surface: [],
            },
            {
                key: "manual",
                name: "Manual Analysis",
                surface: [],
            },
            {
                key: "storeDescription",
                name: "Store Description",
                surface: [],
            },
            {
                key: "sales",
                name: "# of Sales",
                surface: [],
            },
            {
                key: "products",
                name: "Products",
                surface: ["productDescription", "reviews", "images"],
            },
            {
                key: "productDescription",
                name: "Product Description",
                surface: [],
            },
            {
                key: "reviews",
                name: "Reviews",
                surface: [],
            },
            {
                key: "email",
                name: "Email",
                surface: ["emailAddr", "content"],
            },
            {
                key: "content",
                name: "Content Analysis",
                surface: ["numbers", "words", "domain"],
            },
            {
                key: "numbers",
                name: "Numbers",
                surface: ["birthYear", "symbolism", "importantDates"],
            },
            {
                key: "birthYear",
                name: "Birth Year",
                surface: [],
            },
            {
                key: "symbolism",
                name: "Symbolism",
                surface: [],
            },
            {
                key: "importantDates",
                name: "Important Dates",
                surface: ["possibleCountry"],
            },
            {
                key: "words",
                name: "Words",
                surface: ["names", "pronunciation", "language"],
            },
            {
                key: "names",
                name: "Names",
                surface: [],
            },
            {
                key: "pronunciation",
                name: "Pronunciation",
                surface: [],
            },
            {
                key: "language",
                name: "Language",
                surface: [],
            },
            {
                key: "possibleCountry",
                name: "Possible Country",
                surface: [],
            },
            {
                key: "domain",
                name: "Domain",
                surface: ["tld", "possibleAffiliation", "possibleCountry"],
            },
            {
                key: "tld",
                name: "TLD (Top Level Domain)",
                surface: [],
            },
            {
                key: "possibleAffiliation",
                name: "Possible Affiliation",
                surface: [],
            },
            {
                key: "metadata",
                name: "Image Metadata",
                surface: [],
            },
            {
                key: "search",
                name: "Searches",
                surface: ["friends", "searchEngine", "imageSearchEngine", "breaches", "publicKey", "lookup", "registers"],
            },
            {
                key: "friends",
                name: "Find Friends",
                surface: [],
            },
            {
                key: "searchEngine",
                name: "Search Engine Search",
                surface: [],
            },
            {
                key: "imageSearchEngine",
                name: "Search Engine Image Search",
                surface: [],
            },
            {
                key: "breaches",
                name: "Breached Data",
                surface: [],
            },
            {
                key: "publicKey",
                name: "Public PGP Key Search",
                surface: [],
            },
            {
                key: "lookup",
                name: "Email Lookup Tools",
                surface: [],
            },
            {
                key: "registers",
                name: "Registered Domains",
                surface: ["possibleAffiliation"],
            },
            //! INSTAGRAM ATTACK SURFACE
            {
                key: "insta",
                name: "Instagram",
                surface: ["instaId", "profilePic", "username", "name", "verified", "stories", "followers", "following", "website", "biography", "thirdParty", "posts"],
            },
            {
                key: "instaId",
                name: "Instagram ID",
                surface: [],
            },
            {
                key: "profilePic",
                name: "Profile Picture",
                surface: [],
            },
            {
                key: "name",
                name: "Name",
                surface: [],
            },
            {
                key: "verified",
                name: "Verified",
                surface: [],
            },
            {
                key: "stories",
                name: "Stories",
                surface: ["tags", "images", "content", "video", "link", "location"],
            },
            {
                key: "tags",
                name: "Tagged Accounts",
                surface: [],
            },
            {
                key: "video",
                name: "Video",
                surface: [],
            },
            {
                key: "link",
                name: "Link",
                surface: ["domain"],
            },
            {
                key: "location",
                name: "Location",
                surface: ["gps"],
            },
            {
                key: "followers",
                name: "Followers",
                surface: [],
            },
            {
                key: "following",
                name: "Following",
                surface: [],
            },
            {
                key: "website",
                name: "Website",
                surface: ["domain"],
            },
            {
                key: "biography",
                name: "Biography",
                surface: ["content"],
            },
            {
                key: "thirdParty",
                name: "3rd Party Scraped Data",
                surface: ["domain"],
            },
            {
                key: "posts",
                name: "Posts",
                surface: ["tags", "images", "content", "video", "link", "location"],
            },
            //! FACEBOOK ATTACK SURFACE
            {
                key: "fb",
                name: "Facebook",
                surface: ["fbId", "profilePic", "username", "name", "verified", "stories", "followers", "following", "website", "biography", "thirdParty", "posts"],
            },
            {
                key: "fbId",
                name: "Facebook ID",
                surface: [],
            },
            //! TIKTOK ATTACK SURFACE
            {
                key: "tiktok",
                name: "TikTok",
                surface: ["tiktokId", "profilePic", "username", "name", "verified", "likes", "followers", "following", "tiktokVideos", "biography", "thirdParty", "posts"],
            },
            {
                key: "tiktokId",
                name: "TikTok ID",
                surface: [],
            },
            {
                key:"tiktokVideos",
                name: "TikTok Videos",
                surface: ["tags", "likes", "music", "comments", "title"],
            },
        ]
        const getRawResources = () => {
            return raw_resource_urls
        }

            const raw_resource_urls=[
                "osint.party",
                "grep.app/",
                "wireless2.fcc.gov/UlsApp/UlsSearch/searchLicense.jsp",
                "apc-cap.ic.gc.ca/pls/apc_anon/query_amat_cs$.startup",
                "camas.github.io/reddit-search/",
                "github.com/altilunium/wistalk",
                "www.qrz.com/",
                "github.com/sundowndev/PhoneInfoga",
                "sundowndev.github.io/PhoneInfoga/install/",
                "steamid.uk/",
                "www.toddington.com/resources/cheat-sheets/",
                "sundowndev.github.io/PhoneInfoga/install/",
                "steamrep.com/",
                "minecraft-statistic.net/en/players/",
                "commoncrawl.org/",
                "t.me/TgScanRobot/",
                "github.com/GONZOsint/gitrecon",
                "github.com/megadose/toutatis",
                "chaos.institute/deanonymizing-hidden-services-guide/",
                "chaos.institute/fingeprinting-tor-relays-with-jarm/",
                "github.com/Datalux/Osintgram",
                "github.com/Lifka/hacking-resources",
                "anvaka.github.io/map-of-reddit/",
                "dfw1n.github.io/DFW1N-OSINT/",
                "jakecreps.com/osint-tool-tuesday-social-media-phone-number-youtube/",
                "github.com/davidkowalk/twitter_geolocate",
                "github.com/th3unkn0n/osi.ig",
                "vividmaps.com/largest-country-world/",
                "haveibeenzucked.com/",
                "www.artofmanliness.com/articles/how-to-develop-the-situational-awareness-of-jason-bourne/",
                "osint.fans/australia-osint-data-sources",
                "osint.rest/",
                "github.com/warifp/FacebookToolkit",
                "en.wikipedia.org/wiki/List_of_intelligence_gathering_disciplines",
                "mrrickdiesel10-6.medium.com/persint-a-social-engineering-spin-on-your-everyday-osint-4bfa1b9a56c1",
                "www.uk-osint.net/motorvehicle.html",
                "start.me/p/rxeRqr/aml-toolbox",
                "www.youtube.com/watch?v=ljiRh-nOP1Y",
                "nixintel.info/osint-tools/using-pgp-keys-for-osint/",
                "start.me/p/rx6Qj8/nixintel-s-osint-resource-list",
                "netbootcamp.org/pastesearch.html",
                "www.zoomeye.org/",
                "www.youtube.com/watch?v=NqzvuUXkv6c",
                "techjournalism.medium.com/how-new-satellite-data-sources-enhance-investigative-journalism-f6f9ea71f4af",
                "netbootcamp.org/osinttools/",
                "sector035.nl/links",
                "sector035.nl/articles/category:week-in-osint",
                "www.youtube.com/watch?v=aSu7ny6dEXA",
                "www.youtube.com/watch?v=KpnVjE8bSvQ",
                "www.sans.org/blog/list-of-resource-links-from-open-source-intelligence-summit-2021/",
                "www.sans.org/blog/-must-have-free-resources-for-open-source-intelligence-osint-/",
                "domain-checker.valimail.com/dmarc/",
                "tcxsproject.com.br/dev/Biblioteca%20Livros%20Hacker%20Gorpo%20Orko/OSINT%20101-What%20the%20Internet%20Knows.pdf",
                "jakecreps.com/osint-tool-tuesday-email-breach-data-office-365-bangs/",
                "platform.sensity.ai/deepfake-detection",
                "usersearch.org/",
                "www.inteltechniques.net/courses/open-source-intelligence",
                "github.com/kennbroorg/iKy",
                "twitter.com/ai6yrham/status/1382371967618097157",
                "fas.org/irp/doddir/army/tc3-22-69.pdf",
                "topazlabs.com/gigapixel-ai/",
                "web.datatree.com/",
                "nixintel.info/osint/chronolocation-clues-quiztime-11th-may-2020/",
                "skylens.io/",
                "www.osintcombine.com/tools",
                "github.com/Rog3rSm1th/Profil3r",
                "github.com/ThoughtfulDev/EagleEye",
                "www.spydialer.com/",
                "amifloced.org/",
                "www.idcrawl.com/",
                "tree-map.nycgovparks.org/",
                "apps.london.gov.uk/street-trees/",
                "opendata.vancouver.ca/explore/dataset/street-trees/",
                "www.effect.group",
                "youtube.com/watch?v=dU6KG221MaM",
                "mcbroken.com/",
                "labs.internetwache.org/ds_store/",
                "pentestbook.six2dez.com/recon/public-info-gathering",
                "start.me/p/L1rEYQ/osint4all",
                "haveibeenpwned.com",
                "breachchecker.com/",
                "pwndb2am4tzkvold.onion.ws/",
                "leakcheck.net/",
                "leakpeek.com/",
                "intelx.io/",
                "joe.black/leakengine.html",
                "github.com/pixelbubble/ProtOSINT",
                "blockpath.com/",
                "thedatapack.com/tools/find-github-user-email/",
                "medium.com/the-first-digit/osint-how-to-find-information-on-anyone-5029a3c7fd56",
                "docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ/htmlview",
                "github.com/igorbrigadir/twitter-advanced-search",
                "osintcombine.tools/",
                "2lingual.com/",
                "www.trendsmap.com/map",
                "www.yamli.com/",
                "transparencyreport.google.com/safe-browsing/search",
                "justgetmydata.com/",
                "justdeleteme.xyz/",
                "yasiv.com/reddit",
                "www.adl.org/education-and-resources/resource-knowledge-base/adl-heat-map",
                "docs.google.com/spreadsheets/d/<document ID>/export?format=<file format>`",
                "github.com/nixintel/o365chk/",
                "i-sight.com/resources/101-osint-resources-for-investigators/",
                "owlspace.xyz/cybersec/tg-nearby/",
                "opaque.link/post/opsecguide/",
                "github.com/Dutchosintguy/OSINT-Discord-resources",
                "nixintel.info/osint-tools/using-pgp-keys-for-osint/",
                "twitter.com/BitBangingBytes/status/1388716726783672326?s=09",
                "github.com/dessant/search-by-image",
                "github.com/ipinfo/cli",
                "www.uk-osint.net/creatingids.html",
                "search4faces.com/tt00/index.html",
                "github.com/dessant/web-archives",
                "www.pixsy.com/",
                "github.com/sinwindie/OSINT",
                "www.cqcore.uk/email-to-username/",
                "tweeterid.com/",
                "lumendatabase.org/",
                "github.com/BushidoUK/CTI-Lexicon/blob/main/Lexicon.md",
                "sector035.nl/articles/2021-17",
                "crxcavator.io/",
                "github.com/MobileFirstLLC/social-media-hacker-list",
                "whitehatinspector.blogspot.com/2021/03/skype-hidden-osint-goldmine.html",
                "whitehatinspector.blogspot.com/2021/02/using-osint-to-find-missing-persons.html",
                "osintcurio.us/2021/05/06/investigating-discord-a-primer/",
                "youtu.be/vJOQdWk6WMw",
                "smihub.com/",
                "pixwox.com/",
                "www.militaryfactory.com/smallarms/guns-by-country.php",
                "docs.google.com/spreadsheets/d/1JxBbMt4JvGr--G0Pkl3jP9VDTBunR2uD3_faZXDvhxc",
                "www.bing.com/maps",
                "www.mapchannels.com/DualMaps.aspx",
                "mc.bbbike.org/mc/",
                "www.freemaptools.com/",
                "livingatlas.arcgis.com/",
                "search.buzz.im/",
                "www.baidu.com/",
                "github.com/ItIsMeCall911/Awesome-Telegram-OSINT",
                "fingerprintjs.com/blog/external-protocol-flooding/",
                "www.theregister.com/2021/05/14/browser_fingerprinting_flaw/",
                "schemeflood.com/",
                "anonymousplanet.org/guide.html",
                "mattw.io/youtube-geofind/location",
                "soar.earth/",
                "github.com/edgi-govdata-archiving/awesome-website-change-monitoring",
                "docs.google.com/document/d/14li22wAG2Wh2y0UhgBjbqEvZJCDsNZY8vpUAJ_jJ5X8/",
                "safing.io/portmaster/",
                "ssd.eff.org/",
                "github.com/megadose/toutatis",
                "github.com/Datalux/Osintgram",
                "github.com/th3unkn0n/osi.ig",
                "www.aware-online.com/osint-tools/instagram-tools/",
                "www.youtube.com/watch?v=15xj70IpOTw",
                "www.youtube.com/watch?v=9kPPlkAo3ZM",
                "brackets.substack.com/p/7-life-lessons-from-25-years-in-counterterrorism",
                "www.cqcore.uk/are-you-linked-in/",
                "www.aware-online.com/finding-witnesses-via-strava/",
                "osint.sh/",
                "userhunt.co/",
                "www.ghostcodes.com/",
                "youtu.be/XaHWcttD0tM",
                "www.blockint.nl/the-osint-library/",
                "osintcurio.us/2019/07/16/searching-instagram/",
                "www.instagram.com/username/?__a=1",
                "i.instagram.com/api/v1/users/lookup/id/info",
                "www.aware-online.com/find-an-instagram-user-id/",
                "blog.tradint.io/trade-intelligence-tradint-what-is-it-and-why-is-it-important-cd1b34534283",
                "tradint.io/",
                "www.gosecure.net/blog/2021/05/27/step-by-step-how-to-deanonymize-emails-on-linkedin/",
                "www.youtube.com/watch?v=-JjAZF2-Tno",
                "one-plus.github.io/",
                "youtu.be/Fpsr3oWEP8M",
                "youtu.be/L-TOQeHfwBs",
                "twitter.com/henkvaness/status/1399291128244015104",
                "intelx.io/tools",
                "phonebook.cz/",
                "www.bellingcat.com/news/2021/05/28/us-soldiers-expose-nuclear-weapons-secrets-via-flashcard-apps/",
                "tompatrickjarvis.medium.com/useful-google-sheets-functions-for-osint-research-71337f1b5407",
                "vrn.aaronsplace.co.uk",
                "github.com/Ph055a/OSINT_Collection",
                "om.1881.no/nyttige-sider/kataloger-i-utlandet",
                "cheatsheet.haax.fr/open-source-intelligence-osint/platforms-hunting/linkedin/",
                "www.aware-online.com/find-the-email-address-of-a-linkedin-user/",
                "osint.party/api/rss/fresh",
                "github.com/s0md3v/Zen",
                "userhunt.co/",
                "29a.ch/sandbox/2012/imageerrorlevelanalysis/",
                "fotoforensics.com/",
                "www.omnisci.com/demos/tweetmap",
                "parseek.com/",
                "ahmia.fi/",
                "darksearch.io/",
                "search.goo.ne.jp/",
                "www.exploit-db.com/google-hacking-database",
                "www.osintcombine.com/tiktok-quick-search",
                "youtu.be/aVwl892hqb4",
                "platform.sensity.ai/deepfake-detection",
                "twitter.com/IntelTechniques/status/1403384373928292362?s=20",
                "clubhousedb.com/",
                "www.safetydetectives.com/amp/blog/what-is-shodan-and-how-to-use-it-most-effectively/",
                "www.redditinvestigator.com/",
                "twitter.com/Geluchat/status/1405081455483568136",
                "github.com/netkas-zz/KikToolset",
                "archived.moe/",
                "4chansearch.com/",
                "search4chan.org/",
                "4chanarchives.com/",
                "thebarchive.com/",
                "4plebs.org/",
                "archiveofsins.com/",
                "desuarchive.org/",
                "archive.wakarimasen.moe/",
                "randomarchive.com/",
                "archive.nyafuu.org/",
                "boards.fireden.net/",
                "warosu.org/",
                "www.darktracer.com/",
                "metaosint.github.io/",
                "github.com/fastfire/deepdarkCTI",
                "themarkup.org/blacklight",
                "phonebook.cz/",
                "jakecreps.com/osint-workflow-wednesday-extracting-telegram-photos/",
                "openinframap.org/",
                "youtube.com/watch?v=j0Rm3JDszVo",
                "start.me/p/QRqE7r/osint",
                "deepware.ai/",
                "github.com/datamllab/awesome-deepfakes-materials",
                "start.me/p/QRqE7r/osint"
            ]

    return {
        getIdentityProviders,
        getOtherSurfaces,
        addSurfaceToTarget,
        getDefaultTarget,
        getCurrentTarget,
        defaultTarget,
        removeSurfaceFromTarget,
        getProviderSurfaces,
        getRawResources
    };
};


export default useSurface;