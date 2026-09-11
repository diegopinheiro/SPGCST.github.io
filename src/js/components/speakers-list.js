class SpeakersList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="speakers-container">
        <!-- PALESTRANTES CONFIRMADOS -->
        
        <div class="speakers-grid" style="margin-top: 0; margin-bottom: 50px;">
          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RR</div>
            </div>
            <h3 class="speaker-name">Raquel Rolnik</h3>
            <p class="speaker-title">FAU-USP</p>
            <p class="speaker-bio">Arquiteta e urbanista, professora titular da FAU-USP e ex-relatora especial da ONU para o Direito à Moradia Adequada.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">JG</div>
            </div>
            <h3 class="speaker-name">Julio Guató</h3>
            <p class="speaker-title">Povo Indígena Guató</p>
            <p class="speaker-bio">Pesquisador e liderança indígena, atuando na preservação dos saberes ancestrais, território e dinâmicas socioambientais do Pantanal.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RG</div>
            </div>
            <h3 class="speaker-name">Ricardo Galvão</h3>
            <p class="speaker-title">CNPq / USP</p>
            <p class="speaker-bio">Físico, professor titular do Instituto de Física da USP, atual Presidente do CNPq e ex-diretor do INPE.</p>
          </div>
        </div>

        <div class="speakers-grid" style="margin-top: 0;">
          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">JO</div>
            </div>
            <h3 class="speaker-name">Jean Ometto</h3>
            <p class="speaker-title">INPE / CCST</p>
            <p class="speaker-bio">Divulgação em breve</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">AS</div>
            </div>
            <h3 class="speaker-name">António Mauro Saraiva</h3>
            <p class="speaker-title">USP</p>
            <p class="speaker-bio">Divulgação em breve</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">TK</div>
            </div>
            <h3 class="speaker-name">Thelma Krug</h3>
            <p class="speaker-title">INPE / Ex-IPCC</p>
            <p class="speaker-bio">Divulgação em breve</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">AP</div>
            </div>
            <h3 class="speaker-name">Alexandre Pires</h3>
            <p class="speaker-title">MMA</p>
            <p class="speaker-bio">Divulgação em breve</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">MB</div>
            </div>
            <h3 class="speaker-name">Marcos Buckeridge</h3>
            <p class="speaker-title">IB-USP</p>
            <p class="speaker-bio">Divulgação em breve</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('speakers-list', SpeakersList);
