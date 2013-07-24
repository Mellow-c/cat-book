//	HYPE.documents["cat book"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "cat%20book.hyperesources";
	var documentName = "cat book";
	var documentLoaderFilename = "catbook_hype_generated_script.js";
	var mainContainerID = "catbook_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"10":{n:"DSC01332.jpeg",p:1},"2":{n:"Untitled-1-1.jpg",p:1},"15":{n:"DSC01432.jpg",p:1},"3":{n:"Untitled11-1.jpg",p:1},"11":{n:"DSC01364.jpeg",p:1},"4":{n:"12123.jpg",p:1},"16":{n:"DSC01396.jpg",p:1},"5":{n:"1234.jpg",p:1},"12":{n:"DSC01413.jpg",p:1},"6":{n:"13455.jpg",p:1},"13":{n:"DSC01437.jpeg",p:1},"7":{n:"768.jpg",p:1},"0":{n:"DSC023221.jpeg",p:1},"8":{n:"DSC01142_.jpg",p:1},"14":{n:"DSC01435.jpg",p:1},"1":{n:"Untitled-1.jpg",p:1},"9":{n:"DSC01296_.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"74":{b:278,z:"16",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"21"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:363,y:"preserve",J:"Solid"},"3":{o:"content-box",h:"0",x:"visible",a:-10,q:"100% 100%",b:-6,j:"absolute",r:"inline",aA:[],k:"div",c:500,d:332,z:"1",aP:"pointer"},"64":{o:"content-box",h:"5",x:"visible",a:294,q:"100% 100%",b:152,j:"absolute",r:"inline",aA:[{timelineIdentifier:"59",type:3}],k:"div",c:48,d:15,z:"8",aP:"pointer"},"85":{o:"content-box",h:"7",x:"visible",a:1,q:"100% 100%",b:-97,j:"absolute",r:"inline",c:480,k:"div",z:"18",d:91,bJ:"0.000000",e:"1.000000",bH:"0deg"},"69":{b:278,z:"11",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"5"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:75,y:"preserve",J:"Solid"},"60":{b:99,z:"4",K:"Solid",c:99,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:367,y:"preserve",J:"Solid"},"75":{b:278,z:"17",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"47"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:416,y:"preserve",J:"Solid"},"65":{o:"content-box",h:"6",x:"visible",a:0,q:"100% 100%",b:320,j:"absolute",r:"inline",c:480,k:"div",z:"9",d:91.498500000000007},"71":{b:278,z:"13",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"7"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"70":{b:278,z:"12",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"6"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:129,y:"preserve",J:"Solid"},"61":{b:109,z:"5",K:"Solid",c:99,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:377,y:"preserve",J:"Solid"},"66":{b:278,z:"10",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"4"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"72":{b:278,z:"14",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"16"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:247,y:"preserve",J:"Solid"},"62":{b:119,z:"6",K:"Solid",c:99,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:387,y:"preserve",J:"Solid"},"73":{b:278,z:"15",K:"Solid",c:34,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneOid:"19"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:301,y:"preserve",J:"Solid"}},n:"main",T:{"59":{d:1.15,i:"59",n:"time2",a:[{f:"2",t:0,d:1.15,i:"b",e:258,s:320,o:"65"},{f:"2",t:0,d:1.15,i:"a",e:0,s:1,o:"85"},{f:"2",t:0,d:1.15,i:"e",e:"0.465281",s:"1.000000",o:"85"},{f:"2",t:0,d:1.15,i:"b",e:-22,s:-97,o:"85"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"26":{b:73,z:"4",K:"Solid",c:99,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:371,y:"preserve",J:"Solid"},"86":{o:"content-box",h:"8",x:"visible",a:-6,q:"100% 100%",b:0,j:"absolute",r:"inline",c:492,k:"div",z:"2",d:327},"27":{b:82,z:"5",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"76":{b:6,z:"6",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"14":{o:"content-box",h:"1",x:"visible",a:315,q:"100% 100%",b:262,j:"absolute",r:"inline",c:113,k:"div",z:"3",d:31}},n:"1p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"4"},{x:2,p:"600px",c:"#FFFFFF",v:{"34":{b:82,z:"5",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"87":{o:"content-box",h:"9",x:"visible",a:-12,q:"100% 100%",b:-10,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:335},"28":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"},"77":{b:6,z:"6",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"15":{o:"content-box",w:"",h:"2",x:"visible",a:333,q:"100% 100%",b:254,j:"absolute",r:"inline",c:106,k:"div",z:"3",d:29}},n:"2p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"5"},{x:3,p:"600px",c:"#FFFFFF",v:{"78":{b:6,z:"5",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"41":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"},"35":{b:82,z:"3",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"88":{o:"content-box",h:"10",x:"visible",a:-29,q:"100% 100%",b:-36,j:"absolute",r:"inline",c:536,k:"div",z:"2",d:356}},n:"3p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"6"},{x:4,p:"600px",c:"#FFFFFF",v:{"42":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"},"89":{o:"content-box",h:"11",x:"visible",a:-20,q:"100% 100%",b:-25,j:"absolute",r:"inline",c:519,k:"div",z:"2",d:345},"36":{b:82,z:"3",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"79":{b:6,z:"5",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"}},n:"4p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"7"},{x:5,p:"600px",c:"#FFFFFF",v:{"80":{b:6,z:"6",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"37":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"90":{o:"content-box",h:"12",x:"visible",a:-20,q:"100% 100%",b:-25,j:"absolute",r:"inline",c:519,k:"div",z:"2",d:345},"18":{o:"content-box",h:"3",x:"visible",a:83,q:"100% 100%",b:180,j:"absolute",r:"inline",c:148,k:"div",z:"3",d:20},"43":{b:82,z:"5",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"}},n:"5p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"16"},{x:6,p:"600px",c:"#FFFFFF",v:{"91":{o:"content-box",h:"13",x:"visible",a:-20,q:"100% 100%",b:-25,j:"absolute",r:"inline",c:519,k:"div",z:"2",d:345},"44":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"},"81":{b:6,z:"5",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"38":{b:82,z:"3",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:17,y:"preserve",J:"Solid"}},n:"6p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"19"},{x:7,p:"600px",c:"#FFFFFF",v:{"92":{o:"content-box",h:"14",x:"visible",a:-19,q:"100% 100%",b:-25,j:"absolute",r:"inline",c:519,k:"div",z:"2",d:345},"45":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"},"82":{b:6,z:"5",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"39":{b:82,z:"3",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}},n:"7p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"21"},{x:8,p:"600px",c:"#FFFFFF",v:{"46":{b:82,z:"4",K:"Solid",c:54,L:"Solid",d:122,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:5,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:405,y:"preserve",J:"Solid"},"83":{b:6,z:"5",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"},"94":{o:"content-box",h:"15",x:"visible",a:-6,q:"100% 100%",b:0,j:"absolute",r:"inline",c:492,k:"div",z:"2",d:327},"40":{b:82,z:"3",K:"Solid",c:54,L:"Solid",d:154,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"}},n:"8p",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"23"},{x:9,p:"600px",c:"#FFFFFF",v:{"55":{b:72,z:"5",K:"Solid",c:18,L:"Solid",d:164,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:4,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"95":{o:"content-box",h:"16",x:"visible",a:-26,q:"100% 100%",b:-32,j:"absolute",r:"inline",c:530,k:"div",z:"2",d:352},"54":{b:216,z:"4",K:"Solid",c:54,L:"Solid",d:12,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:263,y:"preserve",J:"Solid"},"49":{o:"content-box",h:"4",a:149,x:"visible",q:"100% 100%",b:216,j:"absolute",r:"inline",aA:[{type:0}],k:"div",c:182,d:26,z:"3",aP:"pointer",e:"0.000000"},"84":{b:6,z:"6",K:"Solid",c:97,L:"Solid",d:17,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneOid:"1"}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:193,y:"preserve",J:"Solid"}},n:"9p",T:{kTimelineDefaultIdentifier:{d:1.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.15,i:"e",e:"1.000000",s:"0.000000",o:"49"}],f:30}},o:"47"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

