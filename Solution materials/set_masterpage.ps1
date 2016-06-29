if ((Get-PSSnapin | ? { $_.Name -eq "Microsoft.SharePoint.PowerShell" }) -eq $null) {
    Add-PSSnapin Microsoft.SharePoint.PowerShell
}

$masterPageType = Read-Host "Set default MasterPage(1) or bootstrap MasterPage(2): "
$site = Get-SPweb "http://localhost"
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
}
$site.Update()
$site.Dispose()

Write-Host "master page is set"


