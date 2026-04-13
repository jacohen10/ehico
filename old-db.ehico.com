$TTL 3600

@	IN	SOA	ns1.tierra.net.	hostmaster.tierra.net. (
				2026041301	; Serial
				7200	; Refresh
				1800	; Retry
				604800	; Expire
				28800 )	; Minimum

@	3600	NS		ns1.tierra.net.
@	3600	NS		ns2.tierra.net.
_dmarc	3600	TXT	"v=DMARC1;p=quarantine;"
@	3600	MX	0	ehico-com.mail.protection.outlook.com.
autodiscover	3600	CNAME		autodiscover.outlook.com.
enterpriseregistration	3600	CNAME		enterpriseregistration.windows.net.
enterpriseenrollment	3600	CNAME		enterpriseenrollment.manage.microsoft.com.
@	3600	TXT	"v=spf1 include:spf.protection.outlook.com -all"
@	3600	TXT	"MS=ms31493780"
@	3600	A	209.240.150.231
www	3600	A	209.240.150.231
ftp	3600	A	209.240.150.231
mail	3600	A	209.240.150.231
