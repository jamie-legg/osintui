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

    function parseUrl(url) {
        var parsed = {};
        parsed.protocol = url.split(':')[0];
        parsed.host = url.split('/')[2];
        parsed.path = url.split('/')[3];
        parsed.query = url.split('?')[1];
        parsed.fragment = url.split('#')[1];
        return parsed;
      }
    
    const getRawResources = () => {
        return raw_resources
    }

    //! ITS ALL DATA FROM HERE ON OUT

    //? SURFACE MAP WITH UNIQUE KEYS
    //? RESOURCES WITH TAGS
    
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

        //? RESOURCES START HERE
        //! RESOURCES START HERE
        //? RESOURCES START HERE
        //! RESOURCES START HERE
        //? RESOURCES START HERE
        //! RESOURCES START HERE
        //? RESOURCES START HERE
        //! RESOURCES START HERE

        const raw_resources = [
            {
                "title": "",
                "description": "",
                "tags": ["image", "analysis"],
                "url": "29a.ch/sandbox/2012/imageerrorlevelanalysis/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["language", "search"],
                "url": "2lingual.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["4chan", "archive"],
                "url": "4chanarchives.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["4chan", "search"],
                "url": "4chansearch.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["4chan", "archive"],
                "url": "4plebs.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["darkweb", "search"],
                "url": "ahmia.fi/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["privacy", "check"],
                "url": "amifloced.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["privacy", "guide"],
                "url": "anonymousplanet.org/guide.html"
            },
            {
                "title": "",
                "description": "",
                "tags": ["reddit", "map"],
                "url": "anvaka.github.io/map-of-reddit/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["canada", "search"],
                "url": "apc-cap.ic.gc.ca/pls/apc_anon/query_amat_cs$.startup"
            },
            {
                "title": "",
                "description": "",
                "tags": ["london", "map", "uk", "trees"],
                "url": "apps.london.gov.uk/street-trees/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["boards", "archive"],
                "url": "archive.nyafuu.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["boards", "archive"],
                "url": "archived.moe/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["boards", "archive"],
                "url": "archiveofsins.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["bitcoin", "search"],
                "url": "blockpath.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "guide"],
                "url": "blog.tradint.io/trade-intelligence-tradint-what-is-it-and-why-is-it-important-cd1b34534283"
            },
            {
                "title": "",
                "description": "",
                "tags": ["security", "guide"],
                "url": "brackets.substack.com/p/7-life-lessons-from-25-years-in-counterterrorism"
            },
            {
                "title": "",
                "description": "",
                "tags": ["breach", "check", "search"],
                "url": "breachchecker.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["reddit", "search"],
                "url": "camas.github.io/reddit-search/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["linkedin", "cheatsheet", "intel"],
                "url": "cheatsheet.haax.fr/open-source-intelligence-osint/platforms-hunting/linkedin/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["clubhouse", "search"],
                "url": "clubhousedb.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["data", "crawl", "scrape"],
                "url": "commoncrawl.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["extension", "search"],
                "url": "crxcavator.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["darkweb", "search"],
                "url": "darksearch.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["deepfake", "video"],
                "url": "deepware.ai/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["boards", "archive"],
                "url": "desuarchive.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["australia", "intel", "guide"],
                "url": "dfw1n.github.io/DFW1N-OSINT/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "intel", "guide"],
                "url": "docs.google.com/document/d/14li22wAG2Wh2y0UhgBjbqEvZJCDsNZY8vpUAJ_jJ5X8/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "guide", "toolkit"],
                "url": "docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ/htmlview"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "guide", "toolkit"],
                "url": "docs.google.com/spreadsheets/d/1JxBbMt4JvGr--G0Pkl3jP9VDTBunR2uD3_faZXDvhxc"
            },
            {
                "title": "",
                "description": "",
                "tags": ["phishing", "guide"],
                "url": "domain-checker.valimail.com/dmarc/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["list", "intel"],
                "url": "en.wikipedia.org/wiki/List_of_intelligence_gathering_disciplines"
            },
            {
                "title": "",
                "description": "",
                "tags": ["awareness", "guide"],
                "url": "fas.org/irp/doddir/army/tc3-22-69.pdf"
            },
            {
                "title": "",
                "description": "",
                "tags": ["exploit", "guide"],
                "url": "fingerprintjs.com/blog/external-protocol-flooding/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["photo", "analysis"],
                "url": "fotoforensics.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["language", "guide"],
                "url": "github.com/BushidoUK/CTI-Lexicon/blob/main/Lexicon.md"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "analyse", "recon"],
                "url": "github.com/Datalux/Osintgram"
            },
            {
                "title": "",
                "description": "",
                "tags": ["discord", "list"],
                "url": "github.com/Dutchosintguy/OSINT-Discord-resources"
            },
            {
                "title": "",
                "description": "",
                "tags": ["git", "recon"],
                "url": "github.com/GONZOsint/gitrecon"
            },
            {
                "title": "",
                "description": "",
                "tags": ["telegram", "guide"],
                "url": "github.com/ItIsMeCall911/Awesome-Telegram-OSINT"
            },
            {
                "title": "",
                "description": "",
                "tags": ["exploit", "resource", "list"],
                "url": "github.com/Lifka/hacking-resources"
            },
            {
                "title": "",
                "description": "",
                "tags": ["resource", "general"],
                "url": "github.com/MobileFirstLLC/social-media-hacker-list"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "intel", "search", "list"],
                "url": "github.com/Ph055a/OSINT_Collection"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image", "name", "recon"],
                "url": "github.com/ThoughtfulDev/EagleEye"
            },
            {
                "title": "",
                "description": "",
                "tags": ["wikipedia", "analyse"],
                "url": "github.com/altilunium/wistalk"
            },
            {
                "title": "",
                "description": "",
                "tags": ["deepfake", "resource", "list"],
                "url": "github.com/datamllab/awesome-deepfakes-materials"
            },
            {
                "title": "",
                "description": "",
                "tags": ["twitter", "location", "recon"],
                "url": "github.com/davidkowalk/twitter_geolocate"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image", "search"],
                "url": "github.com/dessant/search-by-image"
            },
            {
                "title": "",
                "description": "",
                "tags": ["web", "archive"],
                "url": "github.com/dessant/web-archives"
            },
            {
                "title": "",
                "description": "",
                "tags": ["web", "history"],
                "url": "github.com/edgi-govdata-archiving/awesome-website-change-monitoring"
            },
            {
                "title": "",
                "description": "",
                "tags": ["darkweb", "intel", "resource"],
                "url": "github.com/fastfire/deepdarkCTI"
            },
            {
                "title": "",
                "description": "",
                "tags": ["twitter", "search"],
                "url": "github.com/igorbrigadir/twitter-advanced-search"
            },
            {
                "title": "",
                "description": "",
                "tags": ["ip", "analyse"],
                "url": "github.com/ipinfo/cli"
            },
            {
                "title": "",
                "description": "",
                "tags": ["email", "analyse"],
                "url": "github.com/kennbroorg/iKy"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "recon"],
                "url": "github.com/megadose/toutatis"
            },
            {
                "title": "",
                "description": "",
                "tags": ["kik", "recon"],
                "url": "github.com/netkas-zz/KikToolset"
            },
            {
                "title": "",
                "description": "",
                "tags": ["office", "check"],
                "url": "github.com/nixintel/o365chk/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["protonmail", "recon"],
                "url": "github.com/pixelbubble/ProtOSINT"
            },
            {
                "title": "",
                "description": "",
                "tags": ["git", "email"],
                "url": "github.com/s0md3v/Zen"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "resource", "guide"],
                "url": "github.com/sinwindie/OSINT"
            },
            {
                "title": "",
                "description": "",
                "tags": ["phone", "recon"],
                "url": "github.com/sundowndev/PhoneInfoga"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "recon"],
                "url": "github.com/th3unkn0n/osi.ig"
            },
            {
                "title": "",
                "description": "",
                "tags": ["facebook", "recon"],
                "url": "github.com/warifp/FacebookToolkit"
            },
            {
                "title": "",
                "description": "",
                "tags": ["git", "search"],
                "url": "grep.app/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["breach", "email", "search"],
                "url": "haveibeenpwned.com"
            },
            {
                "title": "",
                "description": "",
                "tags": ["facebook", "check"],
                "url": "haveibeenzucked.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["resource", "list"],
                "url": "i-sight.com/resources/101-osint-resources-for-investigators/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "intel", "search"],
                "url": "intelx.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["breach", "list"],
                "url": "joe.black/leakengine.html"
            },
            {
                "title": "",
                "description": "",
                "tags": ["privacy", "check", "delete"],
                "url": "justdeleteme.xyz/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["privacy", "data", "check"],
                "url": "justgetmydata.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["mac", "file", "analyse"],
                "url": "labs.internetwache.org/ds_store/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["breach", "check", "email", "search"],
                "url": "leakcheck.net/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["breach", "check", "email", "search"],
                "url": "leakpeek.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["map", "search"],
                "url": "livingatlas.arcgis.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["legal", "search"],
                "url": "lumendatabase.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["youtube", "location", "search"],
                "url": "mattw.io/youtube-geofind/location"
            },
            {
                "title": "",
                "description": "",
                "tags": ["map", "compare"],
                "url": "mc.bbbike.org/mc/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["mcdonalds", "map", "check"],
                "url": "mcbroken.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["person", "intel", "guide"],
                "url": "medium.com/the-first-digit/osint-how-to-find-information-on-anyone-5029a3c7fd56"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "resource", "list"],
                "url": "metaosint.github.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["minecraft", "search"],
                "url": "minecraft-statistic.net/en/players/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["person", "intel"],
                "url": "mrrickdiesel10-6.medium.com/persint-a-social-engineering-spin-on-your-everyday-osint-4bfa1b9a56c1"
            },
            {
                "title": "",
                "description": "",
                "tags": ["pgpkey", "analyse"],
                "url": "nixintel.info/osint-tools/using-pgp-keys-for-osint/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image", "location", "time", "guide"],
                "url": "nixintel.info/osint/chronolocation-clues-quiztime-11th-may-2020/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["directory", "list"],
                "url": "om.1881.no/nyttige-sider/kataloger-i-utlandet"
            },
            {
                "title": "",
                "description": "",
                "tags": ["social", "toolkit", "resource", "list"],
                "url": "one-plus.github.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["awareness", "security", "guide"],
                "url": "opaque.link/post/opsecguide/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["vancouver", "canada", "trees"],
                "url": "opendata.vancouver.ca/explore/dataset/street-trees/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["infrastructure", "map"],
                "url": "openinframap.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["australia", "intel", "resource", "list"],
                "url": "osint.fans/australia-osint-data-sources"
            },
            {
                "title": "",
                "description": "",
                "tags": ["darkweb", "analyse"],
                "url": "osint.party"
            },
            {
                "title": "",
                "description": "",
                "tags": ["facebook", "recon"],
                "url": "osint.rest/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "intel", "resource", "list"],
                "url": "osint.sh/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "map", "visualise"],
                "url": "osintcombine.tools/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "search", "guide"],
                "url": "osintcurio.us/2019/07/16/searching-instagram/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["discord", "guide"],
                "url": "osintcurio.us/2021/05/06/investigating-discord-a-primer/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["telegram", "location", "guide"],
                "url": "owlspace.xyz/cybersec/tg-nearby/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["iran", "news"],
                "url": "parseek.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "intel", "resource", "list"],
                "url": "pentestbook.six2dez.com/recon/public-info-gathering"
            },
            {
                "title": "",
                "description": "",
                "tags": ["domain", "search"],
                "url": "phonebook.cz/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image", "generate", "search"],
                "url": "pixwox.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["darkweb", "proxy"],
                "url": "pwndb2am4tzkvold.onion.ws/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["4chan", "archive", "random"],
                "url": "randomarchive.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["security", "application"],
                "url": "safing.io/portmaster/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["fingerprint", "check"],
                "url": "schemeflood.com/"
            },
            {
                "title": "",
                "description": "Search in open Telegram messages",
                "tags": ["telegram", "search"],
                "url": "search.buzz.im/"
            },
            {
                "title": "",
                "description": "Trending topics in Japan",
                "tags": ["japan", "news", "list"],
                "url": "search.goo.ne.jp/"
            },
            {
                "title": "",
                "description": "Search 4chan",
                "tags": ["4chan", "search"],
                "url": "search4chan.org/"
            },
            {
                "title": "",
                "description": "Search service for people on the Internet from photography",
                "tags": ["person", "search"],
                "url": "search4faces.com/tt00/index.html"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "intel", "news", "weekly"],
                "url": "sector035.nl"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "search", "application"],
                "url": "skylens.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "search"],
                "url": "smihub.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["earth", "maps"],
                "url": "soar.earth/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["personal", "security", "guide"],
                "url": "ssd.eff.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["resource", "list"],
                "url": "start.me/p/L1rEYQ/osint4all"
            },
            {
                "title": "",
                "description": "",
                "tags": ["resource", "list"],
                "url": "start.me/p/QRqE7r/osint"
            },
            {
                "title": "",
                "description": "",
                "tags": ["resource", "list"],
                "url": "start.me/p/rx6Qj8/nixintel-s-osint-resource-list"
            },
            {
                "title": "",
                "description": "",
                "tags": ["resource", "list"],
                "url": "start.me/p/rxeRqr/aml-toolbox"
            },
            {
                "title": "",
                "description": "",
                "tags": ["steam", "uk", "recon"],
                "url": "steamid.uk/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["steam", "search"],
                "url": "steamrep.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["telegram", "recon"],
                "url": "t.me/TgScanRobot/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["satellite", "guide"],
                "url": "techjournalism.medium.com/how-new-satellite-data-sources-enhance-investigative-journalism-f6f9ea71f4af"
            },
            {
                "title": "",
                "description": "",
                "tags": ["4chan", "random", "archive"],
                "url": "thebarchive.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["github", "email", "exploit"],
                "url": "thedatapack.com/tools/find-github-user-email/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["web", "privacy", "check"],
                "url": "themarkup.org/blacklight"
            },
            {
                "title": "",
                "description": "",
                "tags": ["google", "sheets", "guide"],
                "url": "tompatrickjarvis.medium.com/useful-google-sheets-functions-for-osint-research-71337f1b5407"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image", "enhance"],
                "url": "topazlabs.com/gigapixel-ai/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["finance", "intel", "guide"],
                "url": "tradint.io/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["web", "privacy", "check"],
                "url": "transparencyreport.google.com/safe-browsing/search"
            },
            {
                "title": "",
                "description": "",
                "tags": ["nyc", "usa", "trees", "map"],
                "url": "tree-map.nycgovparks.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["twitter", "username"],
                "url": "tweeterid.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["facebook", "instagram", "extension"],
                "url": "twitter.com/Geluchat/status/1405081455483568136"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image", "location", "guide"],
                "url": "twitter.com/ai6yrham/status/1382371967618097157"
            },
            {
                "title": "",
                "description": "",
                "tags": ["username", "search"],
                "url": "userhunt.co/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["username", "search"],
                "url": "usersearch.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["boards", "archive"],
                "url": "warosu.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["usa", "land", "records"],
                "url": "web.datatree.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["general", "wireless", "license", "search"],
                "url": "wireless2.fcc.gov/UlsApp/UlsSearch/searchLicense.jsp"
            },
            {
                "title": "",
                "description": "",
                "tags": ["heat", "map"],
                "url": "www.adl.org/education-and-resources/resource-knowledge-base/adl-heat-map"
            },
            {
                "title": "",
                "description": "",
                "tags": ["awareness", "guide"],
                "url": "www.artofmanliness.com/articles/how-to-develop-the-situational-awareness-of-jason-bourne/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "username", "guide"],
                "url": "www.aware-online.com/find-an-instagram-user-id/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["linkedin", "email", "guide"],
                "url": "www.aware-online.com/find-the-email-address-of-a-linkedin-user/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["witness", "guide"],
                "url": "www.aware-online.com/finding-witnesses-via-strava/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram", "toolkit", "guide"],
                "url": "www.aware-online.com/osint-tools/instagram-tools/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["china", "search"],
                "url": "www.baidu.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["usa", "nuclear", "news"],
                "url": "www.bellingcat.com/news/2021/05/28/us-soldiers-expose-nuclear-weapons-secrets-via-flashcard-apps/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "resource", "reading", "list"],
                "url": "www.blockint.nl/the-osint-library/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["linkin","search","guide"],
                "url": "www.cqcore.uk/are-you-linked-in/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["threat","intel","profiling"],
                "url": "www.cqcore.uk/email-to-username/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["search","keyword","mornitoring", "darkweb"],
                "url": "www.darktracer.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["exploit","resource","list"],
                "url": "www.exploit-db.com/google-hacking-database"
            },
            {
                "title": "",
                "description": "",
                "tags": ['maps',"list","general"],
                "url": "www.freemaptools.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["snapchat","ghostcodes","list"],
                "url": "www.ghostcodes.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["search","number","username"],
                "url": "www.idcrawl.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["maps","embed"],
                "url": "www.mapchannels.com/DualMaps.aspx"
            },
            {
                "title": "",
                "description": "",
                "tags": ["arms","list","genral",],
                "url": "www.militaryfactory.com/smallarms/guns-by-country.php"
            },
            {
                "title": "",
                "description": "",
                "tags": ["twitter","map","language"],
                "url": "www.omnisci.com/demos/tweetmap"
            },
            {
                "title": "",
                "description": "",
                "tags": ["osint","tools","general"],
                "url": "www.osintcombine.com/tools"
            },
            {
                "title": "",
                "description": "",
                "tags": ["image","search"],
                "url": "www.pixsy.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["???????"],
                "url": "www.qrz.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["shodan","search","devices","explainer"],
                "url": "www.safetydetectives.com/amp/blog/what-is-shodan-and-how-to-use-it-most-effectively/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["list","intel","osint","general"],
                "url": "www.sans.org/blog/list-of-resource-links-from-open-source-intelligence-summit-2021/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["usa","reverse lookup","search","number","email"],
                "url": "www.spydialer.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": [],
                "url": "www.theregister.com/2021/05/14/browser_fingerprinting_flaw/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["twitter","trend","map"],
                "url": "www.trendsmap.com/map"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel","uk","resource","list"],
                "url": "https://www.uk-osint.net"
            },
            {
                "title": "",
                "description": "",
                "tags": ["search","arabic"],
                "url": "www.yamli.com/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["video","guide","instagram","image"],
                "url": "www.youtube.com/watch?v=-JjAZF2-Tno"
            },
            {
                "title": "",
                "description": "",
                "tags": ["video","guide","twitter","instagram"],
                "url": "www.youtube.com/watch?v=15xj70IpOTw"
            },
            {
                "title": "",
                "description": "",
                "tags": ["instagram","video","osint","tools"],
                "url": "www.youtube.com/watch?v=9kPPlkAo3ZM"
            },
            {
                "title": "",
                "description": "",
                "tags": ["osint","video","keynote"],
                "url": "www.youtube.com/watch?v=KpnVjE8bSvQ"
            },
            {
                "title": "",
                "description": "",
                "tags": ["video","guide","facebook","private","recon"],
                "url": "www.youtube.com/watch?v=NqzvuUXkv6c"
            },
            {
                "title": "",
                "description": "",
                "tags": ["video","list","osint tools"],
                "url": "www.youtube.com/watch?v=aSu7ny6dEXA"
            },
            {
                "title": "",
                "description": "",
                "tags": ["video","guide","extract text", "gimp"],
                "url": "www.youtube.com/watch?v=ljiRh-nOP1Y"
            },
            {
                "title": "",
                "description": "",
                "tags": ["web","search","general", "intel","map"],
                "url": "www.zoomeye.org/"
            },
            {
                "title": "",
                "description": "",
                "tags": ["reddit","map"],
                "url": "yasiv.com/reddit"
            },
            {
                "title": "",
                "description": "",
                "tags": ["cybersecurity", "news", "video"],
                "url": "youtu.be/Fpsr3oWEP8M"
            },
            {
                "title": "",
                "description": "",
                "tags": ["surveillance", "privacy", "video"],
                "url": "youtu.be/L-TOQeHfwBs"
            },
            {
                "title": "",
                "description": "",
                "tags": ["private", "number", "guide", "video"],
                "url": "youtu.be/XaHWcttD0tM"
            },
            {
                "title": "",
                "description": "",
                "tags": ["messengers", "privacy", "video"],
                "url": "youtu.be/aVwl892hqb4"
            },
            {
                "title": "",
                "description": "",
                "tags": ["video","telegram","search"],
                "url": "youtu.be/vJOQdWk6WMw"
            },
            {
                "title": "",
                "description": "",
                "tags": ["intel", "video", "guide"],
                "url": "youtube.com/watch?v=dU6KG221MaM"
            },
            {
                "title": "",
                "description": "",
                "tags": ["tiktok", "video", "guide"],
                "url": "youtube.com/watch?v=j0Rm3JDszVo"
            }
        ]



    return {
        parseUrl,
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