#sharepoint libs
if ((Get-PSSnapin | ? { $_.Name -eq "Microsoft.SharePoint.PowerShell" }) -eq $null) {
    Add-PSSnapin Microsoft.SharePoint.PowerShell
}
#sharepoint libs

#parameters
Write-Host "Choose master page: " -ForegroundColor 3
Write-Host "1: Default master page (seattle_master)" -ForegroundColor 2
Write-Host "2: Bootstrap master page (seattle_bootstrap)"
Write-Host "3: Start menu master page (seattle-win8-startmenu)"
$masterPageType = Read-Host "Enter number: "

$siteUrl = Read-Host "Site url (default http://localhost): "
if ($siteUrl -eq "") {$siteUrl = "http://localhost"}
#parameters

$site = Get-SPweb $siteUrl
switch ($masterPageType) {
		##default
		"1" {
			$site.MasterUrl = "/_catalogs/masterpage/seattle.master"
			$site.CustomMasterUrl = "/_catalogs/masterpage/seattle.master"
		}
		##bootstrap
		"2" {
			$site.MasterUrl = "/_catalogs/masterpage/seattle_bootstrap.master"
			$site.CustomMasterUrl = "/_catalogs/masterpage/seattle_bootstrap.master"
		}
		##widgets
		"3" {
			$site.MasterUrl = "/_catalogs/masterpage/seattle-win8-startmenu.master"
			$site.CustomMasterUrl = "/_catalogs/masterpage/seattle-win8-startmenu.master"
		}
}
$site.Update()
$site.Dispose()

Write-Host "master page is set"