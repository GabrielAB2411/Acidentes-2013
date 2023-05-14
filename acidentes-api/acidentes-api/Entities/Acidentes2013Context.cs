using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace acidentes_api.Entities;

public partial class Acidentes2013Context : DbContext
{
    public Acidentes2013Context()
    {
    }

    public Acidentes2013Context(DbContextOptions<Acidentes2013Context> options)
        : base(options)
    {
    }

    public virtual DbSet<CausaAcidente> CausaAcidentes { get; set; }

    public virtual DbSet<ClassificacaoAcidente> ClassificacaoAcidentes { get; set; }

    public virtual DbSet<CondicaoMeteorologica> CondicaoMeteorologicas { get; set; }

    public virtual DbSet<DatatranNormalizado> DatatranNormalizados { get; set; }

    public virtual DbSet<DatatranOriginal> DatatranOriginals { get; set; }

    public virtual DbSet<DiaSemana> DiaSemanas { get; set; }

    public virtual DbSet<FaseDia> FaseDia { get; set; }

    public virtual DbSet<Municipio> Municipios { get; set; }

    public virtual DbSet<SentidoVia> SentidoVia { get; set; }

    public virtual DbSet<TipoAcidente> TipoAcidentes { get; set; }

    public virtual DbSet<TipoPista> TipoPista { get; set; }

    public virtual DbSet<TracadoVia> TracadoVia { get; set; }

    public virtual DbSet<Uf> Ufs { get; set; }

    public virtual DbSet<UsoSolo> UsoSolos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PC-GABRIEL;Database=Acidentes2013;User=sa;Password=123456;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CausaAcidente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CausaAci__3214EC0778F3C296");

            entity.ToTable("CausaAcidente");

            entity.Property(e => e.Causa)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ClassificacaoAcidente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Classifi__3214EC07FDAC6C2A");

            entity.ToTable("ClassificacaoAcidente");

            entity.Property(e => e.Classificacao)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<CondicaoMeteorologica>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Condicao__3214EC0721727D3F");

            entity.ToTable("CondicaoMeteorologica");

            entity.Property(e => e.Condicao)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<DatatranNormalizado>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Datatran__3214EC07CB1E4D89");

            entity.ToTable("DatatranNormalizado");

            entity.Property(e => e.Br)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("BR");
            entity.Property(e => e.DataInversa)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Horario)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Km)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("KM");
            entity.Property(e => e.Ufid).HasColumnName("UFId");

            entity.HasOne(d => d.CausaAcidente).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.CausaAcidenteId)
                .HasConstraintName("FK_CausaAcidenteId");

            entity.HasOne(d => d.ClassificacaoAcidente).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.ClassificacaoAcidenteId)
                .HasConstraintName("FK_ClassificacaoAcidenteId");

            entity.HasOne(d => d.CondicaoMeteorologica).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.CondicaoMeteorologicaId)
                .HasConstraintName("FK_CondicaoMeteorologicaId");

            entity.HasOne(d => d.DiaSemana).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.DiaSemanaId)
                .HasConstraintName("FK_DiaSemanaId");

            entity.HasOne(d => d.FaseDia).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.FaseDiaId)
                .HasConstraintName("FK_FaseDiaId");

            entity.HasOne(d => d.Municipio).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.MunicipioId)
                .HasConstraintName("FK_MunicipioId");

            entity.HasOne(d => d.SentidoVia).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.SentidoViaId)
                .HasConstraintName("FK_SentidoViaId");

            entity.HasOne(d => d.TipoAcidente).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.TipoAcidenteId)
                .HasConstraintName("FK_TipoAcidenteId");

            entity.HasOne(d => d.TipoPista).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.TipoPistaId)
                .HasConstraintName("FK_TipoPistaId");

            entity.HasOne(d => d.TracadoVia).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.TracadoViaId)
                .HasConstraintName("FK_TracadoViaId");

            entity.HasOne(d => d.Uf).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.Ufid)
                .HasConstraintName("FK_UFId");

            entity.HasOne(d => d.UsoSolo).WithMany(p => p.DatatranNormalizados)
                .HasForeignKey(d => d.UsoSoloId)
                .HasConstraintName("FK_UsoSoloId");
        });

        modelBuilder.Entity<DatatranOriginal>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("DatatranOriginal");

            entity.Property(e => e.Ano)
                .IsUnicode(false)
                .HasColumnName("\"ano\"");
            entity.Property(e => e.Br)
                .IsUnicode(false)
                .HasColumnName("\"br\"");
            entity.Property(e => e.CausaAcidente)
                .IsUnicode(false)
                .HasColumnName("\"causa_acidente\"");
            entity.Property(e => e.ClassificacaoAcidente)
                .IsUnicode(false)
                .HasColumnName("\"classificacao_acidente\"");
            entity.Property(e => e.CondicaoMetereologica)
                .IsUnicode(false)
                .HasColumnName("\"condicao_metereologica\"");
            entity.Property(e => e.DataInversa)
                .IsUnicode(false)
                .HasColumnName("\"data_inversa\"");
            entity.Property(e => e.DiaSemana)
                .IsUnicode(false)
                .HasColumnName("\"dia_semana\"");
            entity.Property(e => e.FaseDia)
                .IsUnicode(false)
                .HasColumnName("\"fase_dia\"");
            entity.Property(e => e.Feridos)
                .IsUnicode(false)
                .HasColumnName("\"feridos\"");
            entity.Property(e => e.FeridosGraves)
                .IsUnicode(false)
                .HasColumnName("\"feridos_graves\"");
            entity.Property(e => e.FeridosLeves)
                .IsUnicode(false)
                .HasColumnName("\"feridos_leves\"");
            entity.Property(e => e.Horario)
                .IsUnicode(false)
                .HasColumnName("\"horario\"");
            entity.Property(e => e.Id)
                .IsUnicode(false)
                .HasColumnName("\"id\"");
            entity.Property(e => e.Ignorados)
                .IsUnicode(false)
                .HasColumnName("\"ignorados\"");
            entity.Property(e => e.Ilesos)
                .IsUnicode(false)
                .HasColumnName("\"ilesos\"");
            entity.Property(e => e.Km)
                .IsUnicode(false)
                .HasColumnName("\"km\"");
            entity.Property(e => e.Mortos)
                .IsUnicode(false)
                .HasColumnName("\"mortos\"");
            entity.Property(e => e.Municipio)
                .IsUnicode(false)
                .HasColumnName("\"municipio\"");
            entity.Property(e => e.Pessoas)
                .IsUnicode(false)
                .HasColumnName("\"pessoas\"");
            entity.Property(e => e.SentidoVia)
                .IsUnicode(false)
                .HasColumnName("\"sentido_via\"");
            entity.Property(e => e.TipoAcidente)
                .IsUnicode(false)
                .HasColumnName("\"tipo_acidente\"");
            entity.Property(e => e.TipoPista)
                .IsUnicode(false)
                .HasColumnName("\"tipo_pista\"");
            entity.Property(e => e.TracadoVia)
                .IsUnicode(false)
                .HasColumnName("\"tracado_via\"");
            entity.Property(e => e.Uf)
                .IsUnicode(false)
                .HasColumnName("\"uf\"");
            entity.Property(e => e.UsoSolo)
                .IsUnicode(false)
                .HasColumnName("\"uso_solo\"");
            entity.Property(e => e.Veiculos)
                .IsUnicode(false)
                .HasColumnName("\"veiculos\"");
        });

        modelBuilder.Entity<DiaSemana>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__DiaSeman__3214EC07E791F798");

            entity.ToTable("DiaSemana");

            entity.Property(e => e.Dia)
                .HasMaxLength(60)
                .IsUnicode(false);
        });

        modelBuilder.Entity<FaseDia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__FaseDia__3214EC07EA5899CB");

            entity.Property(e => e.Fase)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Municipio>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Municipi__3214EC07F2937610");

            entity.ToTable("Municipio");

            entity.Property(e => e.Municipio1)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Municipio");
        });

        modelBuilder.Entity<SentidoVia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SentidoV__3214EC07B64DC2D1");

            entity.Property(e => e.Sentido)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoAcidente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoAcid__3214EC07470F0065");

            entity.ToTable("TipoAcidente");

            entity.Property(e => e.Tipo)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoPista>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TipoPist__3214EC07D024B2DF");

            entity.Property(e => e.Tipo)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TracadoVia>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TracadoV__3214EC07AE62CD29");

            entity.Property(e => e.Tracado)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Uf>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UF__3214EC071C71AA92");

            entity.ToTable("UF");

            entity.Property(e => e.Estado)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("UF");
        });

        modelBuilder.Entity<UsoSolo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UsoSolo__3214EC073B993E7D");

            entity.ToTable("UsoSolo");

            entity.Property(e => e.Uso)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
